import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import { handleOptionSelect } from "./botLogic";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) startConversation();
    else {
      setMessages([]);
      setOptions([]);
    }
  }, [isOpen]);

  const startConversation = () => {
    const introMessages = [
      { sender: "bot", text: "👋 Hi there! I’m SkillBot." },
      { sender: "bot", text: "💡 I can help you find a mentor or swap your skills." },
      { sender: "bot", text: "🤔 What would you like to do today?" },
    ];

    introMessages.forEach((msg, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now() + i, ...msg }]);
        if (i === introMessages.length - 1) {
          setOptions(["Find a Mentor", "Offer a Skill", "Learn More"]);
        }
      }, (i + 1) * 1000);
    });
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text }]);
  };

  const botSequence = (botMessages) => {
    botMessages.forEach((text, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now() + i, sender: "bot", text }]);
      }, (i + 1) * 1000);
    });
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span className="chat-title">SkillBot Assistant</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}

            {options.length > 0 && (
              <div className="options">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      handleOptionSelect(opt, setOptions, addUserMessage, botSequence, startConversation)
                    }
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle-btn ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comment-dots"></i>}
      </button>
    </div>
  );
};

export default ChatBot;
