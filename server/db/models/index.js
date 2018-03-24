'use strict';
const db = require('../index');
const Sequelize = require('sequelize');

// Require all the models
     // Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations

const Campus = require('./campus');
const Student = require('./student');

Campus.hasMany(Student,{
    foreignKey: {allowNull: false},
    onDelete: 'cascade',
    hooks: true
});
Student.belongsTo(Campus);



module.exports = {
	db,
	Campus,
	Student
}

