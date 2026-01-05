const User = require("../models/User");

async function isAdmin(req, res, next) {
  try {
    const user = await User.findOne({ firebaseUid: req.user.uid });
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Admin access denied" });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: "Admin check failed" });
  }
}

module.exports = isAdmin;
