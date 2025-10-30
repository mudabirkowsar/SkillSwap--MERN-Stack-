// src/botLogic.js

export const handleOptionSelect = (
    option,
    setOptions,
    addUserMessage,
    botSequence,
    startConversation
) => {
    setOptions([]);
    addUserMessage(option);

    // Helper to easily add icon + text
    const iconMsg = (iconUrl, text) => `<img src="${iconUrl}" alt="" width="20" height="20" style="margin-right:8px;vertical-align:middle"/>${text}`;

    // 🔹 MAIN MENU OPTIONS
    if (option === "Find a Mentor") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/4329/4329443.png", "Great! What skill are you looking to learn?"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "Here are some popular skills:"),
        ]);
        setTimeout(() => {
            setOptions(["Web Development", "Graphic Design", "Photography", "Other"]);
        }, 2500);
    }

    else if (option === "Offer a Skill") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/2721/2721291.png", "Awesome! What skill would you like to offer?"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/9068/9068642.png", "Here are some in-demand skills you can teach:"),
        ]);
        setTimeout(() => {
            setOptions(["Web Development", "Digital Marketing", "UI/UX Design", "Other"]);
        }, 2500);
    }

    else if (option === "Learn More") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3652/3652191.png", "SkillSwap is a platform where users teach each other skills for free."),
            iconMsg("https://cdn-icons-png.flaticon.com/512/1674/1674888.png", "You can exchange your knowledge for new skills!"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/3135/3135684.png", "For example: Teach 'Graphic Design' and learn 'Web Development' in return."),
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill", "Platform Benefits"]);
        }, 2500);
    }

    // 🔹 SPECIFIC SKILLS
    else if (
        ["Web Development", "Graphic Design", "Photography", "Digital Marketing", "UI/UX Design"].includes(option)
    ) {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/4230/4230336.png", `Great choice! We'll connect you with learners and mentors in <b>${option}</b>.`),
            iconMsg("https://cdn-icons-png.flaticon.com/512/1828/1828911.png", "Would you like to continue to profile setup or go back to main menu?"),
        ]);
        setTimeout(() => {
            setOptions(["Continue", "Main Menu"]);
        }, 2500);
    }

    else if (option === "Other") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/2920/2920244.png", "No worries! You can add any custom skill in your profile."),
            iconMsg("https://cdn-icons-png.flaticon.com/512/5690/5690149.png", "Would you like to set that up now?"),
        ]);
        setTimeout(() => {
            setOptions(["Yes", "Main Menu"]);
        }, 2500);
    }

    // 🔹 PLATFORM BENEFITS
    else if (option === "Platform Benefits") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/2554/2554890.png", "With SkillSwap, you can:"),
            "1️⃣ Learn new skills for free.",
            "2️⃣ Teach your expertise to others.",
            "3️⃣ Build your portfolio and gain credibility.",
            "Would you like to get started?",
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill", "Main Menu"]);
        }, 5000);
    }

    // 🔹 CONTINUE / YES
    else if (option === "Continue" || option === "Yes") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/5532/5532972.png", "Awesome! Redirecting you to your SkillSwap dashboard..."),
            iconMsg("https://cdn-icons-png.flaticon.com/512/3502/3502458.png", "Let’s build your skill profile!"),
        ]);
    }

    // 🔹 MAIN MENU
    else if (option === "Main Menu") {
        botSequence([iconMsg("https://cdn-icons-png.flaticon.com/512/5534/5534263.png", "Returning to main menu...")]);
        setTimeout(() => startConversation(), 2000);
    }

    // 🔹 HELP / SUPPORT
    else if (option === "Help" || option === "Support") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/484/484613.png", "No problem! I can help you with common issues."),
            "Here are some options:",
        ]);
        setTimeout(() => {
            setOptions(["Login Issue", "Profile Setup Help", "Contact Support", "Main Menu"]);
        }, 2500);
    }

    else if (option === "Login Issue") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3064/3064197.png", "If you're unable to log in, please check your email and password."),
            "You can also reset your password from the login page.",
            "Would you like me to take you there?",
        ]);
        setTimeout(() => {
            setOptions(["Yes", "Main Menu"]);
        }, 3000);
    }

    else if (option === "Profile Setup Help") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3176/3176296.png", "Setting up your profile helps us match you better!"),
            "✅ Add your name and short bio.",
            "✅ Choose skills you can teach.",
            "✅ Select skills you want to learn.",
        ]);
        setTimeout(() => {
            setOptions(["Continue", "Main Menu"]);
        }, 4000);
    }

    else if (option === "Contact Support") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/895/895901.png", "You can reach our support team anytime at support@skillswap.com."),
            "Would you like to send a message now?",
        ]);
        setTimeout(() => {
            setOptions(["Yes", "Main Menu"]);
        }, 2500);
    }

    // 🔹 FEEDBACK
    else if (option === "Feedback") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3601/3601650.png", "We’d love to hear your thoughts!"),
            "How would you rate your experience with SkillSwap so far?",
        ]);
        setTimeout(() => {
            setOptions(["⭐ Excellent", "👍 Good", "😐 Average", "👎 Poor"]);
        }, 2500);
    }

    else if (["⭐ Excellent", "👍 Good", "😐 Average", "👎 Poor"].includes(option)) {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/1828/1828640.png", "Thank you for your feedback! It helps us improve your experience."),
            "Would you like to return to the main menu?",
        ]);
        setTimeout(() => {
            setOptions(["Main Menu"]);
        }, 2500);
    }

    // 🔹 FALLBACK
    else {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/4365/4365273.png", "I’m not sure I understood that."),
            "Please select an option below:",
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill", "Learn More", "Help"]);
        }, 2500);
    }
};
