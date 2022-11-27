// IMPORTING
require("dotenv").config();

const { sequelize } = require("./util/database");
const { User } = require("./models/user");
const { Lead } = require("./models/leads");

const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;
const { register, login } = require("./controllers/auth");
const { getAllLeads, addLead, deleteLead } = require("./controllers/leads");
const { getAllUsers, addUser, deleteUser } = require("./controllers/users");

const app = express();

// MIDDLEWARE  to parse request into JSON
app.use(express.json());
app.use(cors());

// USER & LEAD RELATIONSHIP
User.hasMany(Lead);
Lead.belongsTo(User);

// LOGIN AND REGISTER POST REQUEST
app.post("/register", register);
app.post("/login", login);

// LEADS GET, POST AND DELETE REQUEST
app.get("/leads", getAllLeads);
app.post("/leads", addLead);
app.delete("/leads/:id", deleteLead);

// USER GET, POST, AND DELETE REQUEST
app.get("/users", getAllUsers);
app.post("/users", addUser);
app.delete("/users/:id", deleteUser);

sequelize
  .sync()
  .then(() => {
    app.listen(
      SERVER_PORT,
      console.log(`console is running on ${SERVER_PORT}!`)
    );
  })
  .catch((err) => console.log(err));
