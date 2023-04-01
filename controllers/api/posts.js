const Post = require('../../models/post');

module.exports = {
    getAll,
    create
};

async function getAll(req, res) {
  const posts = await Post.find({}).sort('-updatedAt').populate('user').exec();
  res.json(posts);
}

async function create(req, res) {
  req.body.user = req.user._id;
  console.log(req.body);
  const post = await Post.create(req.body);
  console.log(req.body);
  console.log(post);
  res.json(post);
} 
