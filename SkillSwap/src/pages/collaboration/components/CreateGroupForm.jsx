import React, { useState } from "react";
import "../styles/Form.css";

const CreateGroupForm = ({ handleCreateGroup, setViewMode, loading }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !skillsInput) {
      setFormError("All fields are required.");
      return;
    }

    const requiredSkills = skillsInput.split(",").map((s) => s.trim()).filter((s) => s);
    if (requiredSkills.length === 0) {
      setFormError("Please enter at least one required skill.");
      return;
    }

    setFormError("");
    handleCreateGroup({ name, description, requiredSkills });
  };

  return (
    <div className="form-wrapper">
      <h2 className="section-title">Create New Collaboration Group</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Group Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="React & Firebase Builders"
        />

        <label>Description</label>
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the group's mission..."
        ></textarea>

        <label>Required Skills (Comma separated)</label>
        <input
          type="text"
          value={skillsInput}
          onChange={(e) => setSkillsInput(e.target.value)}
          placeholder="Python, Data Analysis, Marketing"
        />

        {formError && <p className="error-msg">{formError}</p>}

        <div className="form-actions">
          <button type="button" className="btn btn-cancel" onClick={() => setViewMode("myGroups")}>
            Cancel
          </button>
          <button type="submit" className="btn btn-create" disabled={loading}>
            {loading ? "Creating..." : "Create Group"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroupForm;
