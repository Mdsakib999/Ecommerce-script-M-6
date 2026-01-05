const User = require('../models/User');
exports.syncUser = async (req, res) => {
  const { uid, email, name } = req.user;

  let user = await User.findOne({ firebaseUid: uid });

  if (!user) {
    user = await User.create({
      firebaseUid: uid,
      email,
      name: name || email.split("@")[0],
      isAdmin: false, // default
    });
  }

  res.json(user);
};
