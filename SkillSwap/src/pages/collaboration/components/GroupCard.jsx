import React from "react";
import "../styles/GroupCard.css";

const GroupCard = ({ group, isJoinedView, onJoin, loading, setActiveGroup }) => (
  <div className="group-card">
    <h3 className="group-title">{group.name}</h3>
    <p className="group-description">{group.description}</p>

    <div className="skill-list">
      {group.requiredSkills?.map((skill, i) => (
        <span key={i} className="skill-tag">{skill}</span>
      ))}
    </div>

    <p className="member-count">
      Members: <strong>{group.members?.length || 1}</strong>
    </p>

    {isJoinedView ? (
      <button className="btn btn-view" onClick={() => setActiveGroup(group)}>View Space</button>
    ) : (
      <button className="btn btn-join" onClick={() => onJoin(group.id)} disabled={loading}>
        {loading ? "Processing..." : "Join Group"}
      </button>
    )}
  </div>
);

export default GroupCard;
