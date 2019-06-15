const { Router } = require('express');
const router = Router();
const {   hrRegister,userLogin,publishJob} = require('../controller/hr');

router.post('/register', hrRegister);
router.post('/login', userLogin);
router.post('/recruit', publishJob);

module.exports = router;
