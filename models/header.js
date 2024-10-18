const mongoose = require('mongoose');

const navLinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true },
    id: { type: Number, required: true }
});

const actionButtonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true }
});

const headerSchema = new mongoose.Schema({
    logo: { type: String, required: true },
    navLinks: { type: [navLinkSchema], required: true },
    actionButton: { type: actionButtonSchema, required: true }
});

const Header = mongoose.model('Header', headerSchema);

module.exports = Header;