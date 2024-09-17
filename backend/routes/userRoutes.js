// userRoutes.js
const express = require('express');
const {
  searchUsers,
  sendFriendRequest,
  handleFriendRequest,
  recommendFriends,
} = require('../controllers/userController');
const router = express.Router();

router.get('/search', searchUsers);
router.post('/request', sendFriendRequest);
router.post('/request/handle', handleFriendRequest);
router.get('/recommendations/:userId', recommendFriends);

module.exports = router;
