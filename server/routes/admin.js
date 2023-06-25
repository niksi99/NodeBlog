const express = require('express');
const router = express.Router();

const Post = require('../models/post');
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const adminLayouts = '../views/layouts/admin';



router.get('/admin/login', async (req, res) => {
    try {
        const local = {
            title: 'Admin',
            description: 'Admin Page'
        }
        res.render('admin/login', {
            local,
            layout: adminLayouts
        })
    }
    catch(err) { console.log(err)}
})

router.post('/admin/login', async(req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        console.log(username, password);
        res.redirect('/');
    }
    catch(err) {
        console.log(err)
    }
})

router.post('/admin/login', async (req, res) => {
    try {
        const username = req.params.username;
        const password = req.params.password;

        const hashedPashword = await bcrypt.hash(password, 10);

        try {
            const user = await User.create({
                username,
                password: hashedPashword
            })
            res.status(201).json({message: 'Usr created', user})
        }
        catch(error) {
            if(error.code === 11000) {
                res.status(409).json({message: 'User already exists'})
            }
            res.status(500).json({message: 'Internal Server Error'});
        }
    }
    catch(Error) {
        console.log(Error)
    }
})

//router.post('/admin/register', adminController.register)
module.exports = router;