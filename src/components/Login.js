import Button from "./Button";
import "./Styles/Login.css";
import React, { useState } from "react";

function Login() {
  const [data, userData] = useState({ username: "", password: "" });
  const [sign, setSign] = useState(false);

  const handleSignIn = () => {
    setSign(!sign);
  };
  function handleUse(event) {
    event.preventDefault(data);

    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <div>
      <Button className="Login" onClick={handleSignIn}>
        {sign ? "Close" : "Sign in"}
      </Button>
      {sign && (
        <form onSubmit={handleUse}>
          <label>
            Username:
            <input
              type="text"
              onChange={(event) =>
                userData({ ...data, username: event.target.value })
              }
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={(event) =>
                userData({ ...data, password: event.target.value })
              }
            />
          </label>
          <button className="button-login">Login</button>
        </form>
      )}
    </div>
  );
}
export default Login;
