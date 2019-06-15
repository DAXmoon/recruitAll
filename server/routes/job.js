const { Router } = require('express');
const router = Router();
const { getJobDetail,recommendJob } = require('../controller/job');

router.get('/recruit', getJobDetail);
router.get('/recruit/recommend/job', recommendJob);

module.exports = router;
