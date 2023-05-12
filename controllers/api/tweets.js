const Tweet = require('../../models/tweet');

module.exports = {
    getAll,
    create,
    deleteTweet,
    update
};

async function getAll(req, res) {
  const tweets = await Tweet.find({}).sort('-createdAt').populate('user').exec();
  res.json(tweets);
}

async function create(req, res) {
  req.body.user = req.user._id;
  await Tweet.create(req.body);
  const tweets =  await Tweet.find({}).sort('-createdAt').populate('user').exec();
  res.json(tweets);
} 

async function deleteTweet(req, res) {
  await Tweet.findByIdAndDelete(req.body._id);
  const tweets =  await Tweet.find({}).sort('-createdAt').populate('user').exec();
  res.json(tweets);
}

async function update(req, res) {
  const tweet = await Tweet.findByIdAndUpdate({_id:req.body._id}, {content:req.body.updatedContent});
  const tweets =  await Tweet.find({}).sort('-createdAt').populate('user').exec();
  res.json(tweets);
} 