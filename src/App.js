import React, { useState } from "react";
import { render } from "react-dom";
import "./App.css";
import Form from "./Form";

const teamMemberList = [
  { name: "William", email: "will@will.com", role: "Full-stack" },
  { name: "Hazel", email: "hazel@hazel.com", role: "Front-end" },
  { name: "Nathan", email: "nathan@nathan.com", role: "Back-end" },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamList, setTeamList] = useState(teamMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const submitForm = () => {
    const newTeamMember = {
      username: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      return;
    }
  };

  return (
    <div className="App">
      <h1>Team Member List and Form</h1>
      {teamList.map((person, idx) => {
        return (
          <div key={idx}>
            {person.name} is a {person.role} and their email address is:{" "}
            {person.email}
          </div>
        );
      })}
      <Form values={formValues} />
    </div>
  );
}

export default App;
