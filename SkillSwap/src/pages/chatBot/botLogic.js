// src/botLogic.js
export const handleOptionSelect = (option, setOptions, addUserMessage, botSequence, startConversation) => {
  setOptions([]);
  addUserMessage(option);

  if (option === "Find a Mentor") {
    botSequence([
      "🔍 Great! What skill are you looking to learn?",
      "Here are some popular skills:",
    ]);
    setTimeout(() => {
      setOptions(["Web Development", "Graphic Design", "Photography", "Other"]);
    }, 2500);
  } 
  
  else if (option === "Offer a Skill") {
    botSequence([
      "🙌 Awesome! What skill would you like to offer?",
      "Here are some in-demand skills you can teach:",
    ]);
    setTimeout(() => {
      setOptions(["Web Development", "Digital Marketing", "UI/UX Design", "Other"]);
    }, 2500);
  } 
  
  else if (option === "Learn More") {
    botSequence([
      "📘 SkillSwap is a platform where users teach each other skills for free.",
      "You can exchange your knowledge for new skills!",
    ]);
    setTimeout(() => {
      setOptions(["Find a Mentor", "Offer a Skill"]);
    }, 2500);
  } 
  
  else if (
    ["Web Development", "Graphic Design", "Photography", "Digital Marketing", "UI/UX Design"].includes(option)
  ) {
    botSequence([
      `🔥 Great choice! We'll connect you with learners and mentors in **${option}**.`,
      "Would you like to continue to profile setup or go back to main menu?",
    ]);
    setTimeout(() => {
      setOptions(["Continue", "Main Menu"]);
    }, 2500);
  } 
  
  else if (option === "Other") {
    botSequence([
      "✨ No worries! You can add any custom skill in your profile.",
      "Would you like to set that up now?",
    ]);
    setTimeout(() => {
      setOptions(["Yes", "Main Menu"]);
    }, 2500);
  } 
  
  else if (option === "Main Menu") {
    botSequence(["🏠 Returning to main menu..."]);
    setTimeout(() => startConversation(), 2000);
  } 
  
  else if (option === "Continue" || option === "Yes") {
    botSequence([
      "🚀 Awesome! Redirecting you to your SkillSwap dashboard...",
      "💫 Let’s build your skill profile!",
    ]);
  }
};
