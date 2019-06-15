const { Router } = require('express');
const router = Router();
const {
  addCompany,
  getCompany,
  getNineCompany,
  getCompanyDetail
} = require('../controller/company');

router.post('/create', addCompany);
router.get('/company', getCompany);
router.get('/company', getNineCompany);
router.get('/company/id', getCompanyDetail);

module.exports = router;
