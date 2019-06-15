const positionModel = require('../model/job');

//查询职位
async function getJobDetail(req, res, next) {
  try {
    const data = await positionModel
      .find()
      .sort({ _id: -1 })
      .limit(9);
    res.json({
      code: 200,
      success: true,
      msg: 'success',
      data
    });
  } catch (err) {
    next(err);
  }
}

// 获取热门职位
async function recommendJob(req, res, next) {
  try {
    const data = await positionModel.find().limit(4);
    res.json({
      code: 0,
      success: true,
      msg: 'success',
      data
    });
  } catch (err) {
    next(err);
  }
}
//推荐职位
async function getRecommandJob(req, res, next) {
  try {
    const data = await positionModel.find();
    const looks=looksum.length;
    const res=Pop.random(max).looks
    res.json({
      code: 0,
      success: true,
      msg: 'success',
      data
    });
  } catch (err) {
    next(err);
  }
}


module.exports = {
  getJobDetail,
  recommendJob
};
