const express = require('express');

const {
    getProjectList,
    getProjectDetail,
    createProject,
    deleteProject,
    updateProject
} = require('../controllers/projectsController');

const router = express.Router();

// GET request for list of all projects.
router.get('/', getProjectList);

// GET request for one project.
router.get('/:id', getProjectDetail);

// POST request for creating project.
router.post('/', createProject);

// DELETE request to delete project.
router.delete('/:id', deleteProject);

// PUT request to update project.
router.put('/:id', updateProject);

module.exports = router;