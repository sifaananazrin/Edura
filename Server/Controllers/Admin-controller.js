const User = require("../model/User")

const adminUsersRender = async (req, res) => {
    
    
      const usersData = await User.find();
      res.send({ users: usersData });
}

exports.adminUsersRender=adminUsersRender