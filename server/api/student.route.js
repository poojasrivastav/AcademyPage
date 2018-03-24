'use strict'
const apiRouter = require('express').Router();
//const apiRouter = require('./index');
const campus = require('../db/models/campus');
const student = require('../db/models/student');


apiRouter.get('/', (req, res, next) => {

   student.findAll({include: campus})
        .then(allStudent => {
            res.json(allStudent)
        })
        .catch(next)
})

apiRouter.get('/:studentId', (req, res, next) => {
     const id = req.params.studentId;

	student.findById(id, {include: campus})
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

apiRouter.post('/', (req, res, next) => {   
	student.create(req.body)
	.then( createdStudent => res.json({
	  message: 'You have created a new student!',
      newCampus: createdStudent}))
	.catch(next)
})

apiRouter.put('/:studentId', (req, res, next) => {
	const sId = req.params.studentId
	student.findById(sId)
	.then((student) => student.update(req.body))
  .then(updatedCampus =>res.json({
  	   message: 'update successful',
      updatedCampus: updatedCampus
  }))
  .catch(next)
})

apiRouter.delete('/:studentId', (req, res, next) => {
	const studentId = req.params.studentId
	student.destroy({where: {
		id: studentId
  }})
 .then(numAffectedRows => res.json('deleted succesfully'))  
  .catch(next)
})

module.exports = apiRouter;
