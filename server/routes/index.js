const { Router } = require('express');
const router = Router();
const companyRoutes = require('./company');
const hrRoutes = require('./hr');
const codeRoutes = require('./code');
const applicantRoutes = require('./applicant');
const jobRoutes = require('./job');

router.use('/company', companyRoutes);
router.use('/hr', hrRoutes);
router.use('/code', codeRoutes);
router.use('/applicant', applicantRoutes);
router.use('/recruit', jobRoutes);

module.exports = router;
