import React from "react";
import GroupCard from "./GroupCard";
import "../styles/GroupLists.css";

const JoinGroupsList = ({ groups, handleJoinGroup, loading, setViewMode }) => (
  <>
    <h2 className="section-title">Find Groups to Join ({groups.length})</h2>
    <div className="group-grid">
      {groups.length > 0 ? (
        groups.map((g) => (
          <GroupCard
            key={g.id}
            group={g}
            isJoinedView={false}
            onJoin={handleJoinGroup}
            loading={loading}
          />
        ))
      ) : (
        <div className="empty-state">
          <p>Looks like you’ve joined all available groups!</p>
          <button className="link-btn" onClick={() => setViewMode("create")}>
            Or create your own group
          </button>
        </div>
      )}
    </div>
  </>
);

export default JoinGroupsList;
