const Tweet = require('../../models/tweet');

module.exports = {
    getAll,
    create
};

async function getAll(req, res) {
  const tweets = await Tweet.find({}).sort('-updatedAt').populate('user').exec();
  res.json(tweets);
}

async function create(req, res) {
  req.body.user = req.user._id;
  console.log(req.body);
  const tweet = await Tweet.create(req.body);
  res.json(tweet);
} 
