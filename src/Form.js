import React, { useState } from "react";

export default function Form(props) {
  const { values, submit } = props;

  return (
    <form className="form-container">
      <div className="form-group inputs">
        <br />
        <label>
          Name
          <input
            type="text"
            name="name"
            // value={values.name}
            placeholder="Type your name"
            maxLength="30"
          />
        </label>
        <br />
        <br />
        <label>
          Email
          <input
            type="email"
            name="email"
            // value={values.email}
            placeholder="Enter your e-mail"
            maxLength="30"
          />
        </label>
        <br />
        <br />
        <label>
          Role
          <select name="role" value={values.role}>
            <option value="">--Select a Role--</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
          </select>
        </label>
        <br />
        <br />
        <div className="submit">
          <button disabled={!values.email || !values.username || !values.role}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
