const Admin = require("../model/Admin");
const jwt =require('jsonwebtoken')
const User = require("../model/User");
const Teacher=require("../model/Teacher")
const Categories=require("../model/Category")
const Course = require("../model/Course")
const Booking=require("../model/Booking")




const adminLogin = async (req, res) => {
      try {
        const { email, password } = req.body;
        const found = await Admin.findOne({ admin_id: email, password });
        if (found) {
          const reps = {         
            email: found._id,
            admin: found.admin_id,
            accountType: 'admin',
          };
          const token = jwt.sign(reps, process.env.JWT_SECRET_KEY);
          res.send({ success: true, token });
        } else {
          throw new Error('admin not found');
        }
      } catch (error) {
        res.send({ success: false, message: error.message });
      }
    };

    const getAllusers = async (req, res) => {
      try {
        const users = await User.find();
        res.send({ success: true, users });
      } catch (error) {
        res.send({ success: false, message: error.message });
      }
    };

// exports.adminLogin=adminLogin

const blockUnblockUser = async (req, res) => {
  try {
    const { id } = req.params;
    let value;
    const check = await User.findById(id);
    if (check) {
      if (check.status === "Active") {
        value = 'Blocked';
      } else {
        value = 'Active';
      }
    } else {
      throw new Error('Something went wrong');
    }
    await User.findByIdAndUpdate(id, {
      status: value,
    });
    res.send({ success: true, message: 'user status updated' });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};


const getAllTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.find();
    res.send({ success: true, teacher });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const approveTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    let value;
    const check = await Teacher.findById(id);
    if (check) {
      if (check.status === "pending") {
        value = 'Approve';
      } else {
        value = 'pending';
      }
    } else {
      throw new Error('Something went wrong');
    }
    await Teacher.findByIdAndUpdate(id, {
      status: value,
    });
    res.send({ success: true, message: 'Teacher status updated' });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};






// const postAddCategory = async (req, res) => {

// try {
//   const { name, description } = req.body;
//  console.log(req.body)
//   const categories = new Categories({
//     name: name,
//     description: description,
   
//   });
//   const Data = await categories.save();
//   if (Data){
//     res.send({ success: true });
//   } else {
//     res.send({ success: false});
//   }
// } catch (error) {
//   console.log(error.message);
// }
// };

const addCategory = async (req, res, next) => {
  const { name, description } = req.body;

  // Check if category with same name already exists
  const existingCategory = await Categories.findOne({ name });
  if (existingCategory) {
    return res.status(409).json({ message: "Category already exists" });
  }

  // Create new category if it doesn't exist
  const category = new Categories({
    name,
    description,
  });

  try {
    await category.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add category" });
  }

  return res.status(201).json({ category });
};

const getAdminCategory = async (req, res) => {

  try {
    const categories = await Categories.find();
    res.send({ categories });
  } catch (error) {
    console.log(error.message);
  }
}

const getEditCategory = async (req, res) => {
  
    const { id } = req.params;
    console.log(id);
    const categories = await Categories.findOne({ _id: id });
    res.send({  categories });
  } 
  




const postEditCategory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params.id);
    const categoriesData = await Categories.updateOne({ _id: id }, {
      name: req.body.name,
      description: req.body.description,
    });
    if (categoriesData) {
      res.send({message: ' updated'});
    } else {
      res.send({success:false});
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getDeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Categories.deleteOne({ _id: id }).then(() => {
      res.send({message: ' data delected'});
    });
  } catch (error) {
    console.log(error.message);
  }
};



const getDashboard=async (req,res)=>{
  try{
    const student=await User.find().count()
    const instractor=await Teacher.find().count()
    const courses=await Course.find().count()
    const BookingData=await Booking.find()
    const TotalAmout=BookingData.reduce((total,oder)=>total+oder.totalAmount,0)
    res.json({student,instractor,courses,TotalAmout})
    // res.json({instractor})
    // res.json({courses})
  

  } catch(err){
    console.log(err)
  }
}







  module.exports = {
    adminLogin,
    getAllusers,
    blockUnblockUser,
    getAllTeacher,
    approveTeacher,
    addCategory,
    getAdminCategory,
    postEditCategory,
    getDeleteCategory,
    getEditCategory,
    getDashboard
  };
