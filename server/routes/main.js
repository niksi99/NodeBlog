const express = require('express');
const router = express.Router();

const Post = require('../models/post');

const mainController = require('../controllers/MainController')

// router.get('/', function(req, res) {
//     res.send('Helloeee')
// })

router.get('', mainController.homepage)

router.get('/post/:id', mainController.getPostByID)

router.post('/search', mainController.search)
module.exports = router;