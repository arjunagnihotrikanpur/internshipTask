const express = require("express");
const router = express.Router();


const User = require('../models/User');

// Get All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(err) {
        res.json({message: err})
    }
});

// create a user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        hobbies: req.body.hobbies
    })
    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (err) {
        res.json({message: err})
    }
})

// get a specefic user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch(err) {
        res.json({message: err})
    }
})

// Delete a specefic user
router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await User.deleteOne({_id: req.params.id})

        res.json(removedUser)
    } catch(err) {
        res.json({message: err})
    }
    
})

// Update a user
router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.id}, 
            { $set : {name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                hobbies: req.body.hobbies }})
        res.json(updatedUser)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router;