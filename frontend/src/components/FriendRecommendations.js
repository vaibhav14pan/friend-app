import React from 'react';
import { sendFriendRequest } from '../api/friends';

const FriendRecommendations = ({ recommendations, userId }) => {
  const handleSendRequest = async (friendId) => {
    await sendFriendRequest(userId, friendId);
  };

  return (
    <div>
      <h2>Friend Recommendations</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((user) => (
            <li key={user._id}>
              {user.username} (Mutual Friends: {user.commonFriends})
              <button onClick={() => handleSendRequest(user._id)}>Add Friend</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default FriendRecommendations;
