const { Lead } = require('../models/leads');
const { User } = require('../models/user');

module.exports = {
    getAllLeads: async (req, res) => {
        try {
            const leads = await Lead.findAll()
            // const leads = await Lead.findAll({
                // include: [{
                //     model: User,
                //     required: true,
                //     attributes: [`username`]
                // }]
            // })
            res.status(200).send(leads)
        } catch (error) {
            console.log('ERROR in getAllLeads')
            console.log(error)
            res.sendStatus(400)
        }
    },

    addLead: async (req, res) => {
        try {
            const {firstName, lastName, address, city, state, zipcode, email, phone, useage}
            = req.body
            await Lead.create({firstName, lastName, address, city, state, zipcode, email, phone, useage})
            res.sendStatus(200)

        } catch(error) {
            console.log("Error in getCurrentUserLeads")
            console.log(error)
            res.sendStatus(400)
        }

    },

    deleteLead: async (req, res) => {
        try {
            const {id} = req.params
            await Lead.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log("Error in getCurrentUserLeads")
            console.log(error)
            res.sendStatus(400)
        }
    }
}