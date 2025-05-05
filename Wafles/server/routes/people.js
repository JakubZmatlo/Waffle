const express = require('express');
const router = express.Router();


const peopleController = require("../controllers/people")
/**
 * 
 * Get all people
 *  Method GET
 * URL: http://localhost:3000/people
 * */ 
router.get('/', peopleController.getAllPeople);

/**
 * Get all people
 *  Method GET
 * URL: http://localhost:3000/people/{id}
 * */ 
router.get('/:id', peopleController.getPersonById);

/**
 * Create person
 *  Method POST
 * URL: http://localhost:3000/people/
 * */ 
router.post('/', peopleController.createPerson);

/**
 * Delete person
 *  Method DELETE
 * URL: http://localhost:3000/people/{id}
 * */ 
router.delete('/:id', peopleController.deletePerson );

/**
 * Update person
 *  Method PUT
 * URL: http://localhost:3000/people/{id}
 * */ 
router.put('/:id', peopleController.updatePerson);


module.exports = router;
