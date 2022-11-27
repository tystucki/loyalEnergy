const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Lead: sequelize.define("lead", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      autoNull: false,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    useage: DataTypes.STRING,
  }),
};
