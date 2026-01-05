const express = require('express');
const verifyFirebaseToken = require('../middleware/AuthMiddleware');
const { syncUser } = require('../controllers/userController.js');
const router = express.Router();

router.post("/sync", verifyFirebaseToken, syncUser);

module.exports = router;
