// IMPORTING
require('dotenv').config();

const { sequelize } = require('./util/database')
const { User } = require('./models/user');
const { Lead } = require('./models/leads');

const express = require('express');
const cors = require('cors');


const {SERVER_PORT} = process.env;
const {register, login} = require('./controllers/auth')
const {getAllLeads, addLead, deleteLead} = require('./controllers/leads');


const app = express();

// MIDDLEWARE  to parse request into JSON
app.use(express.json())
app.use(cors())


User.hasMany(Lead);
Lead.belongsTo(User);


app.post('/register', register)
app.post('/login', login)

app.get('/leads', getAllLeads);
app.post('/leads', addLead);
app.delete('/leads', deleteLead);

sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, console.log(`console is running on ${SERVER_PORT}!`))
})
.catch(err => console.log(err))


