const Sequelize = require('sequelize')


const sequelize = require('../util/database')

const User = sequelize.define('Info', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    phone: {
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
},
    {
        // Explicitly specify the table name
        tableName: 'infos',
    })

module.exports = User;