const express = require('express');

const {
    getHomeList,
    getHomeDetail,
    createHome,
    deleteHome,
    updateHome
}= require('../controllers/homeController');

const router = express.Router();

// GET request for list of all homes.
router.get('/', getHomeList);

// GET request for one home.
router.get('/:id', getHomeDetail);

// POST request for creating home.
router.post('/', createHome);

// DELETE request to delete home.
router.delete('/:id', deleteHome);

// PUT request to update home.
router.put('/:id', updateHome);

module.exports = router;