import "./Login.css";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const userName = document.querySelector("#user").value;
    console.log(userName);
    const passWord = document.querySelector("#pass").value;
    console.log(passWord);
    setUser(userName);
    setPass(passWord);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required id="user" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required id="pass" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
