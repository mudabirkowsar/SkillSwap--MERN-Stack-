export const handleOptionSelect = (
    option,
    setOptions,
    addUserMessage,
    botSequence,
    startConversation
) => {
    setOptions([]);
    addUserMessage(option.trim());

    const lowerOption = option.toLowerCase();

    // Helper to easily add icon + text
    const iconMsg = (iconUrl, text) =>
        `<img src="${iconUrl}" alt="" width="20" height="20" style="margin-right:8px;vertical-align:middle"/>${text}`;

    // 🔹 GREETINGS
    const greetings = ["hi", "hello", "hey", "hii", "yo", "good morning", "good evening"];
    if (greetings.includes(lowerOption)) {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/4712/4712105.png", "Hey there! 👋 I'm your SkillSwap Assistant!"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/4230/4230060.png", "Welcome to <b>SkillSwap</b> — where you learn, teach, and grow together 🌱"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/3595/3595455.png", "What brings you here today?")
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill", "Learn More", "Just Exploring 👀"]);
        }, 4000);
        return;
    }

    // 🔹 JUST EXPLORING
    if (option === "Just Exploring 👀") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/616/616408.png", "Totally fine! 😊 SkillSwap is all about discovery."),
            iconMsg("https://cdn-icons-png.flaticon.com/512/1491/1491241.png", "Would you like a quick tour or explore on your own?")
        ]);
        setTimeout(() => {
            setOptions(["Give me a Tour 🚀", "Explore Myself"]);
        }, 2500);
        return;
    }

    // 🔹 TOUR
    if (option === "Give me a Tour 🚀") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3652/3652191.png", "SkillSwap connects learners and mentors for <b>free skill exchange</b>."),
            iconMsg("https://cdn-icons-png.flaticon.com/512/1161/1161388.png", "✨ You can teach what you know and learn what you don’t!"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/3161/3161362.png", "Would you like to know how matching works or what benefits you get?")
        ]);
        setTimeout(() => {
            setOptions(["How Matching Works", "Platform Benefits", "Main Menu"]);
        }, 4500);
        return;
    }

    if (option === "Explore Myself") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/616/616408.png", "Cool! You can always ask me anything later 💬"),
            "Would you like to start from the main menu?"
        ]);
        setTimeout(() => {
            setOptions(["Main Menu"]);
        }, 3000);
        return;
    }

    // 🔹 HOW MATCHING WORKS
    if (option === "How Matching Works") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/1256/1256650.png", "Our AI-based matcher connects you with users who have complementary skills."),
            "Example: You can teach <b>Photography</b> and learn <b>Web Design</b> from another user.",
            "Would you like to try matching now?"
        ]);
        setTimeout(() => {
            setOptions(["Yes, Match Me!", "Main Menu"]);
        }, 4000);
        return;
    }

    if (option === "Yes, Match Me!") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/4230/4230336.png", "Perfect! Let’s begin your journey 🚀"),
            "Please choose what you’d like to do first:"
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill"]);
        }, 2500);
        return;
    }

    // 🔹 FIND A MENTOR
    if (option === "Find a Mentor") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/4329/4329443.png", "Great! What skill are you looking to learn?"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "Here are some popular skills:")
        ]);
        setTimeout(() => {
            setOptions(["Web Development", "Graphic Design", "Photography", "Music", "Other"]);
        }, 2500);
        return;
    }

    // 🔹 OFFER A SKILL
    if (option === "Offer a Skill") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/2721/2721291.png", "Awesome! What skill would you like to offer?"),
            iconMsg("https://cdn-icons-png.flaticon.com/512/9068/9068642.png", "Here are some in-demand skills you can teach:")
        ]);
        setTimeout(() => {
            setOptions(["Web Development", "Digital Marketing", "UI/UX Design", "Cooking", "Other"]);
        }, 2500);
        return;
    }

    // 🔹 PLATFORM BENEFITS
    if (option === "Platform Benefits") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/2554/2554890.png", "Here’s what makes SkillSwap awesome:"),
            "✅ Learn new skills for free",
            "✅ Teach what you love & build credibility",
            "✅ Meet like-minded learners globally 🌍",
            "✅ Boost your resume with community learning",
            "Would you like to get started?"
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill", "Main Menu"]);
        }, 5000);
        return;
    }

    // 🔹 SPECIFIC SKILLS
    if (
        ["Web Development", "Graphic Design", "Photography", "Music", "Digital Marketing", "UI/UX Design", "Cooking"].includes(option)
    ) {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/4230/4230336.png", `Great choice! We'll connect you with learners and mentors in <b>${option}</b>.`),
            iconMsg("https://cdn-icons-png.flaticon.com/512/1828/1828911.png", "Would you like to continue to profile setup or go back?")
        ]);
        setTimeout(() => {
            setOptions(["Continue", "Main Menu"]);
        }, 2500);
        return;
    }

    // 🔹 LEARN MORE
    if (option === "Learn More") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3652/3652191.png", "SkillSwap is a skill-sharing community."),
            "You can teach one skill and learn another — all for free!",
            "Would you like to know about safety, verification, or success stories?"
        ]);
        setTimeout(() => {
            setOptions(["Safety Measures", "Verification Process", "Success Stories 🌟", "Main Menu"]);
        }, 4000);
        return;
    }

    // 🔹 SAFETY
    if (option === "Safety Measures") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/484/484613.png", "Your safety is our top priority 🔒"),
            "All users are verified before interaction.",
            "Chat is monitored for respectful behavior.",
            "Would you like to know how verification works?"
        ]);
        setTimeout(() => {
            setOptions(["Verification Process", "Main Menu"]);
        }, 4000);
        return;
    }

    // 🔹 VERIFICATION
    if (option === "Verification Process") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3064/3064197.png", "Verification ensures only real, trusted users connect."),
            "You can verify using email, ID, or social login.",
            "Would you like to complete verification now?"
        ]);
        setTimeout(() => {
            setOptions(["Yes", "Main Menu"]);
        }, 4000);
        return;
    }

    // 🔹 SUCCESS STORIES
    if (option === "Success Stories 🌟") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3135/3135684.png", "💬 Mudabir learned Web Design in 3 months by teaching Spanish!"),
            "💬 Aman exchanged Cooking lessons for Guitar sessions 🎸",
            "Would you like to start your own SkillSwap journey?"
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill", "Main Menu"]);
        }, 5000);
        return;
    }

    // 🔹 FEEDBACK
    if (option === "Feedback") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/3601/3601650.png", "We’d love your feedback ❤️"),
            "How would you rate your experience so far?"
        ]);
        setTimeout(() => {
            setOptions(["⭐ Excellent", "👍 Good", "😐 Okay", "👎 Needs Improvement"]);
        }, 2500);
        return;
    }

    if (["⭐ Excellent", "👍 Good", "😐 Okay", "👎 Needs Improvement"].includes(option)) {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/1828/1828640.png", "Thanks for your feedback! 🌟"),
            "Would you like to explore more or return to main menu?"
        ]);
        setTimeout(() => {
            setOptions(["Main Menu"]);
        }, 3000);
        return;
    }

    // 🔹 CONTINUE / YES
    if (option === "Continue" || option === "Yes") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/5532/5532972.png", "Redirecting you to your SkillSwap dashboard..."),
            iconMsg("https://cdn-icons-png.flaticon.com/512/3502/3502458.png", "Let's create your skill profile! 🚀")
        ]);
        return;
    }

    // 🔹 MAIN MENU
    if (option === "Main Menu") {
        botSequence([
            iconMsg("https://cdn-icons-png.flaticon.com/512/5534/5534263.png", "Back to the main menu! What would you like to do?")
        ]);
        setTimeout(() => {
            setOptions(["Find a Mentor", "Offer a Skill", "Learn More", "Feedback"]);
        }, 2500);
        return;
    }

    // 🔹 FALLBACK
    botSequence([
        iconMsg("https://cdn-icons-png.flaticon.com/512/4365/4365273.png", "Hmm, I didn’t catch that 🤔"),
        "Try selecting one of the options below 👇"
    ]);
    setTimeout(() => {
        setOptions(["Find a Mentor", "Offer a Skill", "Learn More", "Feedback"]);
    }, 2500);
};
