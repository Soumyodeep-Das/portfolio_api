const express = require('express');

const {
    getContactList,
    getContactDetail,
    createContact,
    deleteContact,
    updateContact,
    getFormList,
    getFormDetail,
    createForm,
    deleteForm,
    updateForm
} = require('../controllers/contactController');

const router = express.Router();

// GET request for list of all contacts.
router.get('/', getContactList);

// GET request for one contact.
router.get('/:id', getContactDetail);

// POST request for creating contact.
router.post('/', createContact);

// DELETE request to delete contact.
router.delete('/:id', deleteContact);

// PUT request to update contact.
router.put('/:id', updateContact);

// GET request for list of all forms.
router.get('/forms', getFormList);

// GET request for one form.
router.get('/forms/:id', getFormDetail);

// POST request for creating form.
router.post('/forms', createForm);

// DELETE request to delete form.
router.delete('/forms/:id', deleteForm);

// PUT request to update form.
router.put('/forms/:id', updateForm);

module.exports = router;
