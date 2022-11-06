import React from "react";

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Chit Chat</div>
        <div className="title">Register</div>
        <form>
          <input type="text" placeholder="Display name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="" alt="Add Image" />
            <span>Add your profile picture</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Log in</p>
      </div>
    </div>
  );
};
