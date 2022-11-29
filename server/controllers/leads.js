const { Lead } = require("../models/leads");

module.exports = {
  getAllLeads: async (req, res) => {
    try {
      const leads = await Lead.findAll();
      res.status(200).send(leads);
    } catch (error) {
      console.log("ERROR in getAllLeads");
      console.log(error);
      res.sendStatus(400);
    }
  },

  getLead: async (req, res) => {
    try {
      const user = await Lead.findOne({
        where: id = +req.params.id
      });
      res.status(200).send(user);
    } catch (error) {
      console.log("ERROR in getAllUsers");
      console.log(error);
      res.sendStatus(400);
    }
  },

  addLead: async (req, res) => {
    try {
      const {
        firstName,lastName,address,city,state,
        zipcode,email,phone,useage,bill,mpu,income,credit,
        spouse,lender,pool,ev,occupants,ownerage,roofage,
        hoa,hoaName,hoaPhone,hoaEmail,hoaWebsite,hoaPresidentName,
        comments,appointment,time,objections

      } = req.body;
      await Lead.create({
        firstName,lastName,address,city,state,
        zipcode,email,phone,useage,bill,mpu,income,credit,
        spouse,lender,pool,ev,occupants,ownerage,roofage,
        hoa,hoaName,hoaPhone,hoaEmail,hoaWebsite,hoaPresidentName,
        comments,appointment,time,objections,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log("Error in getCurrentUserLeads");
      console.log(error);
      res.sendStatus(400);
    }
  },

  deleteLead: async (req, res) => {
    try {
      const { id } = req.params;
      await Lead.destroy({ where: { id: +id } });
      const leads = await Lead.findAll();
      res.status(200).send(leads);
    } catch (error) {
      console.log("Error in getCurrentUserLeads");
      console.log(error);
      res.sendStatus(400);
    }
  },

  // editLead: async (req, res) => {
  //   try {
  //     const {id} = req.params
  //     await Lead.update({where: {id: +id}})
  //     res.sendStatus(200)
  //   }
  // },
};
