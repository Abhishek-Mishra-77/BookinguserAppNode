const express = require('express');
const router = express.Router();
const User = require('../models/UserData');



router.post('/post', async (req, res) => {
    try {
        const name = req.body.user_name
        const phone = req.body.phone
        const email = req.body.userEmail
        const data = await User.create({ name: name, phone: phone, email: email });
        res.send(data);
    }
    catch (error) {
        res.status(500).json({
            error: error
        })
    }
})


module.exports = router;