const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'bookingapplication',
    'root',
    '@Abhi2002',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = sequelize;