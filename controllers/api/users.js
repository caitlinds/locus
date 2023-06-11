const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  getAll,
  update,
  // clockIn,
  // clockOut
};

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can serialize a string
    res.json(token);
  } catch (err) {
    // Probably a dup email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // Find the user by their email address
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    // Check if the password matches
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
    // res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function getAll(req, res) {
  const users = await User.find().sort('-createdAt').exec();
  res.json(users);
}

/* Helper Functions */

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function update(req, res) {
  if (req.body.timeStatus) {
    await User.findByIdAndUpdate({_id:req.user._id}, {timeStatus:false});
    const user = await User.findById({_id:req.user._id});
    res.json(user);
  } else {
    await User.findByIdAndUpdate({_id:req.user._id}, {timeStatus:true});
    const user = await User.findById({_id:req.user._id});
    res.json(user);
  }
}

// async function clockIn(req, res) {
//   await User.findByIdAndUpdate({_id:req.user._id}, {timeStatus:true});
//   const user = await User.findById({_id:req.user._id});
//   res.json(user);
// }

// async function clockOut(req, res) {
//   await User.findByIdAndUpdate({_id:req.user._id}, {timeStatus:false});
//   const user = await User.findById({_id:req.user._id});
//   res.json(user);
// }