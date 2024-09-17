import { instance } from './api';

// Get friend recommendations based on mutual friends
export const getFriendRecommendations = (userId) => {
  return instance.get(`/users/recommendations/${userId}`);
};
