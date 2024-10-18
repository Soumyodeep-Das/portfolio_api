const express = require('express');
const router = express.Router();

const aboutRoutes = require('./aboutRoutes');
const contactRoutes = require('./contactRoutes');
const educationRoutes = require('./educationRoutes');
const experienceRoutes = require('./experienceRoutes');
const footerRoutes = require('./footerRoutes');
const headerRoutes = require('./headerRoutes');
const homeRoutes = require('./homeRoutes');
const projectRoutes = require('./projectRoutes');
const resumeRoutes = require('./resumeRoutes');
const skillRoutes = require('./skillRoutes');

router.use('/about', aboutRoutes);
router.use('/contact', contactRoutes);
router.use('/education', educationRoutes);
router.use('/experience', experienceRoutes);
router.use('/footer', footerRoutes);
router.use('/header', headerRoutes);
router.use('/home', homeRoutes);
router.use('/project', projectRoutes);
router.use('/resume', resumeRoutes);
router.use('/skill', skillRoutes);

module.exports = router;
