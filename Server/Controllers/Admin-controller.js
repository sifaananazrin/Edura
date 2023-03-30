const Admin = require("../model/Admin");
const jwt =require('jsonwebtoken')
const User = require("../model/User");
const Teacher=require("../model/Teacher")




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


const addCourse= (req, res) => {
  const { name, description, image, link } = req.body;
  const chapters = [];

  const newCourse = new Course({
    name,
    description,
    image,
    link,
    chapters
  });

  newCourse.save()
    .then(course => {
      res.json(course);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to create course.' });
    });
};

const getAllCourse = async (req, res) => {
  try {
    const course = await Course.find();
    res.send({ success: true, course });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};


exports.getAllCourse=getAllCourse;
exports.addCourse=addCourse;
exports.signup = signup;
exports.login = login;
const postAddCategory = async (req, res) => {

try {
  const { cat, des } = req.body;
 console.log(req.body)
  const categories = new Categories({
    name: cat,
    description: des,
   
  });
  const Data = await categories.save();
  if (Data){
    res.send({ success: true });
  } else {
    res.send({ success: false});
  }
} catch (error) {
  console.log(error.message);
}
};


const getAdminCategory = async (req, res) => {

  try {
    const categories = await Categories.find();
    res.send({ categories });
  } catch (error) {
    console.log(error.message);
  }
}

const postEditCategory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params.id);
    const categoriesData = await Categories.updateOne({ _id: id }, {
      name: req.body.cat,
      description: req.body.des,
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





  module.exports = {
    adminLogin,
    getAllusers,
    blockUnblockUser,
    getAllTeacher,
    approveTeacher,
    postAddCategory,
    getAdminCategory,
    postEditCategory,
    getDeleteCategory
  };
