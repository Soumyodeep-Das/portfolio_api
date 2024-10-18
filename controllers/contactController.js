const { Contact, Form } = require('../models/contact')

// Display list of all contacts.
const getContactList = async (req, res) => {
    try {
        const contactList = await Contact.find();
        res.status(200).json(contactList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific contact.
const getContactDetail = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle contact create on POST.
const createContact = async (req, res) => {
    const contact = new Contact({
        platform: req.body.platform,
        link: req.body.link
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle contact delete on DELETE.
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        await contact.remove();
        res.json({ message: 'Contact deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle contact update on PUT.
const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        contact.platform = req.body.platform;
        contact.link = req.body.link;
        const updatedContact = await contact.save();
        res.json(updatedContact);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Display list of all forms.
const getFormList = async (req, res) => {
    try {
        const formList = await Form.find();
        res.status(200).json(formList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific form.
const getFormDetail = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (form == null) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.json(form);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle form create on POST.
const createForm = async (req, res) => {
    const form = new Form({
        name: req.body.name,
        fields: req.body.fields
    });

    try {
        const newForm = await form.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle form delete on DELETE.
const deleteForm = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (form == null) {
            return res.status(404).json({ message: 'Form not found' });
        }
        await form.remove();
        res.json({ message: 'Form deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle form update on PUT.
const updateForm = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (form == null) {
            return res.status(404).json({ message: 'Form not found' });
        }
        form.name = req.body.name;
        form.fields = req.body.fields;
        const updatedForm = await form.save();
        res.json(updatedForm);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
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
}