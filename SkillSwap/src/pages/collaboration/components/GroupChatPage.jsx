import React, { useState, useEffect, useRef } from "react";
import "../styles/GroupChatPage.css";

const MOCK_USER_ID = "user_id_001_mock_session";

const GroupChatPage = ({ group, onBack }) => {
  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hey team! Ready to start?", timestamp: "10:00 AM" },
    { sender: "Bob", text: "Yes, let's go 🚀", timestamp: "10:01 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const message = {
      sender: MOCK_USER_ID,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, message]);
    setNewMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-header-info">
          <h2>{group.name}</h2>
          <p>{group.description}</p>
        </div>
        <button className="back-btn" onClick={onBack}>← Back</button>
      </div>

      <div className="chat-layout">
        <aside className="chat-sidebar">
          <h3>Members</h3>
          <ul>
            {group.members.map((m, i) => (
              <li key={i} className={m === MOCK_USER_ID ? "me" : ""}>
                {m === MOCK_USER_ID ? "You" : `Member ${i + 1}`}
              </li>
            ))}
          </ul>
        </aside>

        <main className="chat-main">
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender === MOCK_USER_ID ? "sent" : "received"}`}>
                <div className="msg-bubble">
                  <p>{msg.text}</p>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GroupChatPage;
