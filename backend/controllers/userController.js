const User = require('../models/userModel');

// Search for users
exports.searchUsers = async (req, res) => {
  const { query } = req.query;
  const users = await User.find({ username: { $regex: query, $options: 'i' } });
  res.json(users);
};

// Send a friend request
exports.sendFriendRequest = async (req, res) => {
  const { userId, friendId } = req.body;
  const user = await User.findById(friendId);
  user.friendRequests.push(userId);
  await user.save();
  res.json({ message: 'Friend request sent' });
};

// Accept or reject a friend request
exports.handleFriendRequest = async (req, res) => {
  const { userId, friendId, action } = req.body;
  const user = await User.findById(userId);

  if (action === 'accept') {
    user.friends.push(friendId);
  }

  user.friendRequests = user.friendRequests.filter((id) => id !== friendId);
  await user.save();
  res.json({ message: `Request ${action}ed` });
};

// Recommend friends based on mutual friends
exports.recommendFriends = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId).populate('friends');

  const recommendations = await User.aggregate([
    {
      $match: {
        _id: { $ne: user._id },
        friends: { $in: user.friends.map(friend => friend._id) }
      }
    },
    {
      $project: {
        username: 1,
        commonFriends: { $size: { $setIntersection: ['$friends', user.friends.map(friend => friend._id)] } }
      }
    },
    { $sort: { commonFriends: -1 } }
  ]);

  res.json(recommendations);
};
