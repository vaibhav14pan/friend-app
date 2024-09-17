import { instance } from './api';

// Get friends
export const getFriends = (userId) => {
  return instance.get(`/users/${userId}/friends`);
};

// Search users by username
export const searchUsers = (query) => {
  return instance.get('/users/search', { params: { query } });
};

// Send a friend request
export const sendFriendRequest = (userId, friendId) => {
  return instance.post('/users/request', { userId, friendId });
};

// Accept or reject a friend request
export const handleFriendRequest = (userId, friendId, action) => {
  return instance.post('/users/request/handle', { userId, friendId, action });
};

// Get friend requests
export const getFriendRequests = (userId) => {
  return instance.get(`/users/${userId}/friend-requests`);
};
