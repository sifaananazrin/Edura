const User = require("../model/User");
const bcrypt = require("bcryptjs");
const instance = require("../Middleware/razorpay");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Course = require("../model/Course");
const Booking = require("../model/Booking");
const Teacher=require("../model/Teacher");
const Quiz = require("../model/Quiz");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email ,status: "Active" });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(401).json({ message: "User not found" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const reps = {
    // eslint-disable-next-line no-underscore-dangle
    id: existingUser._id,
    email:existingUser.email,
    accountType: 'user',
  };
  // after password is correct we want to generate a token
  const token = jwt.sign(reps, process.env.JWT_SECRET_KEY);

  res.cookie(String(existingUser.id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: "lax",
  });
  res
    .status(200)
    .json({
      message: "Login successful",
      name: existingUser.name,
      token,
      email: existingUser.email,
      uid: existingUser._id,
    });
};

//verify token
const verifyTocken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  console.log(token);
  //     const headers =req.headers[`authorization`];
  //     // console.log(headers)
  //     const token =  headers.split(" ")[1]
  if (!token) {
    res.status(404).json({ message: "No tocken found" });
  }
  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "invalid Tocken" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  return res.status(200).json({ user });
};

//verify token
const refreshToken = (req, res, next) => {
  if (!req.headers.hasOwnProperty("cookie")) {
    return res.status(400).json({ message: "Could not find cookie" });
  }
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "couldnt find token" });
  }
  jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication is failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = " ";
    // it will clean prev token from cookie then generate new tocken

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30s",
    });
    //regenerate the cookie
    res.cookie(String(user.id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30), //30 seconds
      httpOnly: true,
      sameSite: "lax",
    });

    req.id = user.id; //attaching req.id to user.id
    next();
  });
};

//otp

var email;

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shifananazrin15@gmail.com",
    pass: "ynudgxldjsercxjs",
  },
});

const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;


const signup = async (req, res) => {
  name = req.body.name;
  email = req.body.email;
  password = req.body.password;
  cPassword = req.body.cPassword;

  console.log(name);

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.send({ user: true });
      return;
      // break;
    }

    //   const OTP = ${Math.floor(1000 + Math.random() * 9000)};
    const mailDetails = {
      from: "Shifananazrin15@gmail.com",
      to: email,
      subject: "Learning ACCOUNT REGISTRATION",
      html: `<p>YOUR OTP FOR REGISTERING IN Leaning platform ${OTP}</p>`,
    };

    if (password == cPassword) {
      await mailTransporter.sendMail(mailDetails);
      console.log("Email Sent Successfully");
      res.send({ email: true });
    }
  } catch (err) {
    console.log("Error Occurs: ", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const PostOtp = async (req, res) => {
  const { otp } = req.body;

  console.log(req.body);
  console.log(OTP);
  PostOtp;

  if (OTP == otp) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = new User({
      name: name,
      email: email,
      password: hashPassword,
    });

    user.save().then(() => {
      res.send({ success: true });
    });
  } else {
    console.log("otp error");
    res.send({ OTP: "OTP ERROR" });
  }
};

const getAllCourse = async (req, res) => {
  try {
    const course = await Course.find({ status: 'Approve' }).select('-link -list');
    res.send({ success: true, course });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};


const confirmOrder = async (req, res) => {
  const { name, totalAmount, uid, image,teachername,link } = req.body;
 console.log(totalAmount)

  const options = {
    amount: totalAmount * 100,
    currency: "INR",
    receipt: `PAY-${Date.now()}`,
  };

  instance.orders.create(options, (err, orders) => {
    if (err) {
      console.log(err);
    } else {
      res.json([{ success: true, orders }]);
    }
  });
};

const verifyPayment = async (req, res) => {
  console.log("reached verify paymet");
  const details = req.body;
  console.log(details);
  const crypto = require("crypto");
  let hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
  hmac.update(details.razorpay_order_id + "|" + details.razorpay_payment_id);
  hmac = hmac.digest("hex");

  if (hmac == details.razorpay_signature) {
    console.log("payment verified!");
    
    const order = new Booking({
        order_id: Date.now(),
        user_id: details.userId,
        name: details.data.name,
        totalAmount: details.data.totalAmount,
        image:details.data.image,
        course_id:details.data.course_id,
        link:details.data.link,
        teachername:details.data.teachername,
        teacherid:details.data.teacherid,
        order_placed_on: new Date(),
      });
    
     await order.save()
     res.json({ success: true, message: "payment success" });
  } else {
    res.json({ success: false, err_message: "payment failed" });
  }
};

const paymentFailure = (req, res) => {
  const details = req.body;
  console.log(details);
  res.send("payment failed");
};

const getProductDetail= async (req, res) => {
  try {
    const { id } = req.params;
    const found = await Course.findOne({ _id: id });
 

    res.send({ found });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllCount=async(req,res)=>{
  try{
    const TotalUsers=await User.find().count()
    const TotalInstructors= await Teacher.find().count()
    res.json({TotalUsers,TotalInstructors})

  }catch(error){
    console.log(error);
}

}


const getOderDetail = async (req, res) => {
  try {
    const { uid } = req.query;
    
    const userBooked = await Booking.find({ user_id: uid });
    console.log(userBooked);
    console.log(userBooked.to);
    if (userBooked) {
      res.send({ userBooked, success: true });
    }
  } catch (error) {
    console.log(error.message);
    
  }
};


const getProductDetailData = async (req, res) => {
  try {
    const { name } = req.body;
    const found = await Course.findOne({ name: name });
   

    res.send({ found });
  } catch (error) {
    console.log(error.message);
  }
};


const getAlreadyOder = async (req, res) => {
  try {
    const { user_id, cid } = req.query;
    // console.log(req.body)
    console.log(cid)
    const found = await Booking.findOne({ user_id: user_id, course_id: cid });
    if (found) {
      res.send({ success:true, massage:"already purchased" })
    } else {
      res.send({ success:false, massage:"not purchased" })
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getQuestions = async (req, res) => {
  try {
    const { courseId } = req.query;   
    const found = await Quiz.find({ courseId });
    if (found.length > 0) {
      res.send({ found });
    } else {
      res.send({ message: 'No exams found for this course' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: 'Internal server error' });
  }
};



exports.signup = signup;
exports.login = login;
exports.verifyTocken = verifyTocken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;
exports.PostOtp = PostOtp;
exports.getProductDetail = getProductDetail;
exports.getAllCourse = getAllCourse;
exports.confirmOrder = confirmOrder;
exports.paymentFailure = paymentFailure;
exports.verifyPayment = verifyPayment;
exports.getAllCount = getAllCount;
exports.getOderDetail = getOderDetail;
exports.getProductDetailData = getProductDetailData;
exports.getAlreadyOder=getAlreadyOder;
exports.getQuestions=getQuestions;
