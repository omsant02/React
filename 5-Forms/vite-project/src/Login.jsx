import { useRef, useState } from "react";
import "./Login.css";
const Login = () => {
  const nameRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = nameRef.current.value;
    const password = passRef.current.value;

    console.log("Submitted - Username:", username, "Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" ref={nameRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required ref={passRef} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
