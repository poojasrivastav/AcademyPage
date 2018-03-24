'use strict'
//const apiRouter = require('./index');
const apiRouter = require('express').Router();
const campus = require('../db/models/campus');
const student = require('../db/models/student');

apiRouter.get('/', function(req, res, next) {
    campus.findAll({include: student, order: ['id']})
        .then(campuses => res.json(campuses))
        .catch(next);
})

apiRouter.get('/:campusId', function(req, res, next) {
    campus.findById(req.params.campusId, {include: student})
        .then(campus => res.json(campus))
        .catch(next);
})

apiRouter.post('/', (req, res, next) => {

	campus.create(req.body)
	.then(createdCampus => res.json({
      message: 'You have created a new campus!',
      newCampus: createdCampus
    }))
	.catch(next)
})


apiRouter.put('/:campusId', (req, res, next) => {
 const campusId = req.params.campusId;
 campus.update(req.body, {
 	where: {id: campusId},
 	returning: true,
 	plain: true
})
 .then(updatedCampus =>
     res.json({
      message: 'update successful',
      updatedCampus: updatedCampus
    }))          
 .catch(next)

})

apiRouter.delete('/:campusId', (req, res, next) => {

	const campusId = req.params.campusId;
    campus.destroy({
    	where: {
    		id: campusId
    	}
    })
    .then(numAffectedRows => res.json('deleted succesfully'))  
    .catch(next)

})

module.exports = apiRouter;



















