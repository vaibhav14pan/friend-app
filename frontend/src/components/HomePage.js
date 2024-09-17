import React, { useEffect, useState } from 'react';
import FriendList from './FriendList';
import FriendRequest from './FriendRequest';
import FriendRecommendations from './FriendRecommendations';
import { getFriends, getFriendRequests } from '../api/friends';
import { getFriendRecommendations } from '../api/recommendations';

const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const userId = 'your-user-id'; // Replace with actual user ID from localStorage or session

  useEffect(() => {
    fetchFriends();
    fetchFriendRequests();
    fetchRecommendations();
  }, []);

  const fetchFriends = async () => {
    const response = await getFriends(userId);
    setFriends(response.data);
  };

  const fetchFriendRequests = async () => {
    const response = await getFriendRequests(userId);
    setFriendRequests(response.data);
  };

  const fetchRecommendations = async () => {
    const response = await getFriendRecommendations(userId);
    setRecommendations(response.data);
  };

  return (
    <div>
      <h1>Welcome to the Friend Management System</h1>
      <FriendList friends={friends} />
      <FriendRequest requests={friendRequests} userId={userId} />
      <FriendRecommendations recommendations={recommendations} userId={userId} />
    </div>
  );
};

export default HomePage;
