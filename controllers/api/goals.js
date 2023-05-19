const Goal = require('../../models/goal');

module.exports = {
    getAll,
    create,
    deleteGoal,
    update
};

async function getAll(req, res) {
  const goals = await Goal.find({}).sort('-createdAt').populate('user').exec();
  res.json(goals);
}

async function create(req, res) {
  req.body.user = req.user._id;
  await Goal.create(req.body);
  const goals =  await Goal.find({}).sort('-createdAt').populate('user').exec();
  res.json(goals);
} 

async function deleteGoal(req, res) {
  await Goal.findByIdAndDelete(req.body._id);
  const goals =  await Goal.find({}).sort('-createdAt').populate('user').exec();
  res.json(goals);
}

async function update(req, res) {
  const goal = await Goal.findByIdAndUpdate({_id:req.body._id}, {content:req.body.updatedContent});
  const goals =  await Goal.find({}).sort('-createdAt').populate('user').exec();
  res.json(goals);
} 