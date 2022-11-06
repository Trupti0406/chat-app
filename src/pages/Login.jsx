import React from "react";

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Chit Chat</div>
        <div className="title">Login</div>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};
