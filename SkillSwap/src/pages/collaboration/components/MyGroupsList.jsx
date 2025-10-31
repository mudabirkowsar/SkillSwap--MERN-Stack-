import React from "react";
import GroupCard from "./GroupCard";
import "../styles/GroupLists.css";

const MyGroupsList = ({ groups, setActiveGroup, setViewMode }) => (
  <>
    <h2 className="section-title">My Collaborations ({groups.length})</h2>
    <div className="group-grid">
      {groups.length > 0 ? (
        groups.map((g) => <GroupCard key={g.id} group={g} isJoinedView={true} setActiveGroup={setActiveGroup} />)
      ) : (
        <div className="empty-state">
          <p>You haven’t joined or created any groups yet.</p>
          <button className="link-btn" onClick={() => setViewMode("join")}>Find groups to join!</button>
        </div>
      )}
    </div>
  </>
);

export default MyGroupsList;
