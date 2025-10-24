const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebookController');

// User routes
router.get('/profile', facebookController.getUserProfile);
router.get('/pages', facebookController.getUserPages);

// Page routes
router.post('/post', facebookController.postToPage);
router.get('/insights/:pageId', facebookController.getPageInsights);

module.exports = router;