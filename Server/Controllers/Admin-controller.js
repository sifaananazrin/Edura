const Admin = require("../model/Admin");
const jwt =require('jsonwebtoken')
const User = require("../model/User");

// rest of your code


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


module.exports = {
  adminLogin,
  getAllusers,
  blockUnblockUser,
};