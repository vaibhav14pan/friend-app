import React from 'react';
import { handleFriendRequest } from '../api/friends';

const FriendRequest = ({ requests, userId }) => {
  const handleAccept = async (friendId) => {
    await handleFriendRequest(userId, friendId, 'accept');
  };

  const handleReject = async (friendId) => {
    await handleFriendRequest(userId, friendId, 'reject');
  };

  return (
    <div>
      <h2>Friend Requests</h2>
      {requests.length > 0 ? (
        <ul>
          {requests.map((request) => (
            <li key={request._id}>
              {request.username}
              <button onClick={() => handleAccept(request._id)}>Accept</button>
              <button onClick={() => handleReject(request._id)}>Reject</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No friend requests.</p>
      )}
    </div>
  );
};

export default FriendRequest;
