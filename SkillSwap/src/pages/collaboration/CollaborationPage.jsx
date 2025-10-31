import React, { useState } from "react";
import "./styles/CollaborationPage.css";
import GroupChatPage from "./components/GroupChatPage";
import MyGroupsList from "./components/MyGroupsList";
import JoinGroupsList from "./components/JoinGroupsList";
import CreateGroupForm from "./components/CreateGroupForm";

const generateUniqueId = () => Math.random().toString(36).substring(2, 9);

const initialGroups = [
  {
    id: generateUniqueId(),
    name: "React 101 & UX Design Mentorship",
    description:
      "A dedicated group for swapping React fundamentals for practical UX/UI design feedback on side projects.",
    requiredSkills: ["React", "JavaScript", "UX/UI Design"],
    members: ["user_id_001_mock_session", generateUniqueId(), generateUniqueId()],
    creatorId: "user_id_001_mock_session",
  },
  {
    id: generateUniqueId(),
    name: "The Data Science Collaborative",
    description: "Working through Kaggle datasets and sharing Python and R expertise.",
    requiredSkills: ["Python", "R", "Data Analysis", "Machine Learning"],
    members: ["user_id_001_mock_session"],
    creatorId: generateUniqueId(),
  },
  {
    id: generateUniqueId(),
    name: "Language Exchange: Spanish/Mandarin",
    description:
      "Practice speaking in Spanish (offered) for Mandarin learning (requested).",
    requiredSkills: ["Spanish", "Mandarin"],
    members: [generateUniqueId()],
    creatorId: generateUniqueId(),
  },
];

const MOCK_USER_ID = "user_id_001_mock_session";

const CollaborationPage = () => {
  const [viewMode, setViewMode] = useState("myGroups");
  const [allGroups, setAllGroups] = useState(initialGroups);
  const [loading, setLoading] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const myGroups = allGroups.filter((g) => g.members.includes(MOCK_USER_ID));
  const joinableGroups = allGroups.filter((g) => !g.members.includes(MOCK_USER_ID));

  const handleCreateGroup = ({ name, description, requiredSkills }) => {
    setLoading(true);
    setTimeout(() => {
      const newGroup = {
        id: generateUniqueId(),
        name,
        description,
        requiredSkills,
        members: [MOCK_USER_ID],
        creatorId: MOCK_USER_ID,
      };
      setAllGroups((prev) => [...prev, newGroup]);
      setViewMode("myGroups");
      setLoading(false);
    }, 500);
  };

  const handleJoinGroup = (groupId) => {
    setLoading(true);
    setTimeout(() => {
      setAllGroups((prev) =>
        prev.map((group) =>
          group.id === groupId
            ? { ...group, members: [...group.members, MOCK_USER_ID] }
            : group
        )
      );
      setViewMode("myGroups");
      setLoading(false);
    }, 500);
  };

  let content;
  if (activeGroup)
    content = <GroupChatPage group={activeGroup} onBack={() => setActiveGroup(null)} />;
  else if (viewMode === "myGroups")
    content = <MyGroupsList groups={myGroups} setActiveGroup={setActiveGroup} setViewMode={setViewMode} />;
  else if (viewMode === "create")
    content = <CreateGroupForm handleCreateGroup={handleCreateGroup} setViewMode={setViewMode} loading={loading} />;
  else if (viewMode === "join")
    content = <JoinGroupsList groups={joinableGroups} handleJoinGroup={handleJoinGroup} loading={loading} setViewMode={setViewMode} />;

  return (
    <div className="collab-page">
      {!activeGroup && (
        <>
          <div className="top-bar">
            <div className="view-buttons">
              <button
                className={`tab-btn ${viewMode === "myGroups" ? "active" : ""}`}
                onClick={() => setViewMode("myGroups")}
              >
                My Groups
              </button>
              <button
                className={`tab-btn ${viewMode === "join" ? "active" : ""}`}
                onClick={() => setViewMode("join")}
              >
                Find Groups
              </button>
            </div>
            <button className="btn btn-create-main" onClick={() => setViewMode("create")}>
              + Create Group
            </button>
          </div>
          <div className="user-info">
            <strong>Active Mock User ID:</strong> {MOCK_USER_ID}
          </div>
        </>
      )}

      {loading ? <div className="loader">Processing...</div> : content}
    </div>
  );
};

export default CollaborationPage;
