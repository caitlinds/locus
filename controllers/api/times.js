const Time = require('../../models/time');
const User = require('../../models/user');

module.exports = {
    getAll,
    getUserAll,
    create,
    update
    // getStatus
};

async function getAll(req, res) {
  const times = await Time.find().sort('-createdAt').populate('user').exec();
  res.json(times);
}

async function getUserAll(req, res) {
  try {
    const times = await Time.find({user: req.user._id}).sort('-createdAt').populate('user').exec();
    res.json(times);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.timeIn = Date();
  await Time.create(req.body);
  const times = await Time.find({user:req.user._id}).sort('-createdAt').populate('user').exec();
  res.json(times);
} 

async function update(req, res) {
  req.body.user = req.user._id;
  req.body.timeOut = Date();
  const time = await Time.findOneAndUpdate({user:req.user._id, timeOut:null}, {timeOut:req.body.timeOut});
  const times =  await Time.find({user: req.user._id}).sort('-createdAt').populate('user').exec();
  res.json(times);
}