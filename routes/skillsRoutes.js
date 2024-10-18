const express = require('express');

const {
    getSkills,
    createSkills,
    deleteSkills,
    updateSkills,
    getTechnologies,
    createTechnology,
    deleteTechnology,
    updateTechnology
} = require('../controllers/skillsController');

const router = express.Router();

// GET request for list of all skills.
router.get('/', getSkills);

// POST request for creating skills.
router.post('/', createSkills);

// DELETE request to delete skills.
router.delete('/:id', deleteSkills);

// PUT request to update skills.
router.put('/:id', updateSkills);

// GET request for list of all technologies.
router.get('/technologies', getTechnologies);

// POST request for creating technology.
router.post('/technologies', createTechnology);

// DELETE request to delete technology.
router.delete('/technologies/:id', deleteTechnology);

// PUT request to update technology.
router.put('/technologies/:id', updateTechnology);

module.exports = router;