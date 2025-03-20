import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import 'stream-chat-css';

const api_key = 'YOUR_API_KEY';
const user_id = 'YOUR_USER_ID';
const user_token = 'YOUR_USER_TOKEN';

const chatClient = StreamChat.getInstance(api_key);

const user = {
  id: user_id,
  name: 'Your Name',
};

chatClient.connectUser(user, user_token);

const channel = chatClient.channel('messaging', 'general', {
  name: 'General',
});

function App() {
  return (
    <div className="app-container">
      <Chat client={chatClient} theme="messaging light">
        <channel.Channel channel={channel} />
      </Chat>
    </div>
  );
}

export default App;