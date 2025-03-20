import React, { useState } from 'react';
import { Chat } from 'chatui';
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
      <Chat
        messages={messages}
        onSendMessage={handleSendMessage}
        onChangeMessage={(message) => setNewMessage(message)}
        placeholder="Type a message..."
      />
    </div>
  );
}

export default App;