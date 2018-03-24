const Sequelize = require('sequelize')
const db = require('../index');

const Student = db.define('student', {


    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }

    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    gpa: {
        type: Sequelize.DECIMAL, 
        min: 0,
        max: 4
    },

    fullName: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
        }
    }


})

module.exports = Student

