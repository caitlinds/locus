const Tweet = require('../../models/tweet');

module.exports = {
    getAll,
    create,
    deleteTweet,
    update
};

async function getAll(req, res) {
  const tweets = await Tweet.find({}).sort('-updatedAt').populate('user').exec();
  res.json(tweets);
}

async function create(req, res) {
  req.body.user = req.user._id;
  const tweet = await Tweet.create(req.body);
  res.json(tweet);
} 

async function deleteTweet(req, res) {
  console.log(req.body);
  const tweet = await Tweet.findByIdAndDelete(req.body._id);
}

async function update(req, res) {
  const tweet = await Tweet.findByIdAndUpdate({_id:req.body._id}, {content:req.body.updatedContent});
  res.json(tweet);
}