const { Router } = require('express');
const router = Router();
const {
  userRegister,
  userLogin,
  sendResume,
  getResume,
  changePass,
  changeEmail,
  changePhone
} = require('../controller/applicant');

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/resume', sendResume); //发布简历
router.get('/', getResume); // 获取个人信息
router.post('/password', changePass); // 修改密码
router.post('/phone', changePhone); // 修改手机号
router.post('/email', changeEmail); // 修改邮箱

module.exports = router;
