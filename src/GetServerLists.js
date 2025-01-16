// src/components/GetServerLists.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetServerLists = () => {
  const [userId, setUserId] = useState(''); // Αναγνωριστικό του χρήστη
  const [lists, setLists] = useState([]);   // Λίστες του χρήστη
  const [loading, setLoading] = useState(false); // Κατάσταση φόρτωσης

  useEffect(() => {
    if (userId) {
      fetchUserLists(userId);
    }
  }, [userId]);

  const fetchUserLists = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`/getUserLists`, { params: { userId } });
      setLists(response.data.lists);
    } catch (error) {
      console.error('Error fetching user lists:', error);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleFetchLists = () => {
    if (userId) {
      fetchUserLists(userId);
    }
  };

  return (
    <div className="GetServerLists">
      <h1>User Lists</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={handleInputChange}
      />
      <button onClick={handleFetchLists}>Fetch Lists</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {lists.map((list) => (
            <li key={list.listId}>
              <h2>{list.title}</h2>
              <ul>
                {list.tasks.map((task) => (
                  <li key={task.taskId}>{task.description}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetServerLists;
