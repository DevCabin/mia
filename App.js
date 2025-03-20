import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    const response = await axios.post('/api/chat', { input: newMessage });
    setMessages([...messages, { user: newMessage, response: response.data.response }]);
    setNewMessage('');
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat Interface</h2>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <span className="user-message">{message.user}</span>
              <span className="response-message">{message.response}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;