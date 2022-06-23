const Sequelize = require("sequelize");

const sequelize =  new Sequelize("react_tasks", "root", "rootroot", {
    dialect: "mysql",
    host: "localhost"
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}