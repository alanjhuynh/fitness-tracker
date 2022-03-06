const express = require('express');
const router = express.Router();

const User = require('../../models/User');


router.post('/register', (req, res) => {
    newUser = new User({
        email: req.body.email,
        username: req.body.username
    });

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            res.json({
                success: false,
                message: `Your account could not be registered. Error: ${err}`
            })
        }
        else {
            res.json({
                success: true,
                message: `Your account has been created.`
            })
        }
    })
});

module.exports = router;