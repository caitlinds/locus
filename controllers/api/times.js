const Time = require('../../models/time');
const User = require('../../models/user');

module.exports = {
    getAll,
    getUserAll,
    create,
    update
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
  req.body.timeOut = new Date();
  const time = await Time.findOneAndUpdate({user:req.user._id, timeOut:null}, {timeOut:req.body.timeOut});
  const hrsWorked = (req.body.timeOut - time.timeIn)/(60 * 60 * 1000); 
  await Time.findOneAndUpdate({user:req.user._id, _id:time._id}, {totalHours:hrsWorked});
  const times =  await Time.find({user: req.user._id}).sort('-createdAt').populate('user').exec();
  res.json(times);
;}