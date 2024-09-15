// src/components/ChatPage.js
import React, { useState } from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { id: messages.length + 1, text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      // Simulate bot reply
      setTimeout(() => {
        setMessages([...newMessages, { id: messages.length + 2, text: 'Thanks for your message!', sender: 'bot' }]);
      }, 1000);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f6f9',
      fontFamily: 'Arial, sans-serif',
    },
    chatBox: {
      width: '100%',
      maxWidth: '400px',
      height: '80vh',
      backgroundColor: '#ffffff',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    },
    chatHeader: {
      backgroundColor: '#4caf50',
      padding: '15px',
      color: 'white',
      fontSize: '1.2em',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    chatBody: {
      flex: 1,
      padding: '15px',
      overflowY: 'auto',
      backgroundColor: '#f9f9f9',
    },
    chatMessage: {
      padding: '10px 15px',
      borderRadius: '10px',
      margin: '10px 0',
      maxWidth: '75%',
      wordBreak: 'break-word',
      display: 'flex',
    },
    userMessage: {
      backgroundColor: '#dcf8c6',
      alignSelf: 'flex-end',
      marginRight: '10px',
    },
    botMessage: {
      backgroundColor: '#ece5dd',
      alignSelf: 'flex-start',
      marginLeft: '10px',
    },
    chatFooter: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #ddd',
    },
    chatInput: {
      flex: 1,
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '20px',
      marginRight: '10px',
      fontSize: '1em',
      outline: 'none',
    },
    chatSendButton: {
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      padding: '10px 16px',
      cursor: 'pointer',
      fontSize: '1em',
      outline: 'none',
      transition: 'background-color 0.3s ease',
    },
    chatSendButtonHover: {
      backgroundColor: '#45a049',
    },
    '@media (maxWidth: 600px)': {
      chatBox: {
        width: '95%',
        height: '85vh',
      },
      chatHeader: {
        fontSize: '1em',
      },
      chatMessage: {
        fontSize: '0.9em',
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div style={styles.chatHeader}>
          <h3>Fruit.Ai Chat</h3>
        </div>
        <div style={styles.chatBody}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                ...styles.chatMessage,
                ...(message.sender === 'user' ? styles.userMessage : styles.botMessage),
              }}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div style={styles.chatFooter}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.chatInput}
          />
          <button
            onClick={handleSendMessage}
            style={styles.chatSendButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.chatSendButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.chatSendButton.backgroundColor)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
