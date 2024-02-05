const express = require('express');
const router = express.Router();
const User = require('../models/UserData');

router.get('/user-get', async (req, res) => {
    const data = await User.findAll();
    res.send(data);
});


module.exports = router;