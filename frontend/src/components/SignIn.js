import "./Styles/SignIn.css";
import React, { useState } from "react";

function SignIn() {
  const [data, userData] = useState({ username: "", password: "" });

  function handleUse(event) {
    event.preventDefault(data);

    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <div className="Login_form">
      <form onSubmit={handleUse} className="form">
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
    </div>
  );
}
export default SignIn;
