import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import { handleOptionSelect } from "./botLogic";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
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
      { sender: "bot", text: "👋 Hi there! I’m <b>SkillBot</b>." },
      { sender: "bot", text: "💡 I can help you find a mentor or swap your skills." },
      { sender: "bot", text: "🤔 What would you like to do today?" },
    ];

    introMessages.forEach((msg, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now() + i, ...msg }]);
        if (i === introMessages.length - 1) {
          setOptions(["Find a Mentor", "Offer a Skill", "Learn More"]);
        }
      }, (i + 1) * 900);
    });
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text }]);
  };

  const botSequence = (botMessages) => {
    setIsTyping(true);
    botMessages.forEach((text, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now() + i, sender: "bot", text }]);
        if (i === botMessages.length - 1) setIsTyping(false);
      }, (i + 1) * 900);
    });
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                alt="bot-avatar"
                className="bot-avatar-header"
              />
              <div>
                <div className="chat-title">SkillBot Assistant</div>
                <div className="chat-subtitle">Online • Ready to help</div>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-wrapper ${msg.sender}`}
              >
                {msg.sender === "bot" && (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                    alt="bot-avatar"
                    className="bot-avatar"
                  />
                )}
                <div
                  className={`message-bubble ${msg.sender}`}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {options.length > 0 && (
              <div className="options">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      handleOptionSelect(
                        opt,
                        setOptions,
                        addUserMessage,
                        botSequence,
                        startConversation
                      )
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

      {/* Floating Chat Toggle Button */}
      <button
        className={`chat-toggle-btn ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comment-dots"></i>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
