const { User } = require("../models/user");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.log("ERROR in getAllUsers");
      console.log(error);
      res.sendStatus(400);
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findOne({
        where: id = +req.params.id
      });
      res.status(200).send(user);
    } catch (error) {
      console.log("ERROR in getAllUsers");
      console.log(error);
      res.sendStatus(400);
    }
  },

  addUser: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        dob,
        address,
        city,
        state,
        zipcode,
        email,
        phone,
        admin,
        territory,
        role,
        notes,
      } = req.body;
      await User.create({
        firstName,
        lastName,
        dob,
        address,
        city,
        state,
        zipcode,
        email,
        phone,
        admin,
        territory,
        role,
        notes,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log("Error");
      console.log(error);
      res.sendStatus(400);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id: +id } });
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.log("Error ");
      console.log(error);
      res.sendStatus(400);
    }
  },
};
