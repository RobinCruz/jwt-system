const express = require('express');
const Controller = require("../controllers/controller");

const router = express.Router();

router.post('/register', Controller.register);
router.post('/login', Controller.login);
router.post('/token', Controller.refreshToken);
router.post('/logout', Controller.logout);
router.get('/health', Controller.health);

module.exports = router;