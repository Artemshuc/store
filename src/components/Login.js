import "./Styles/Login.css";
import React, { useState } from "react";

function Login() {
  const [data, userData] = useState({ username: "", password: "" });

  function handleUse(event) {
    event.preventDefault(data);

    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <>
      <form onSubmit={handleUse}>
        <label>
          Username:
          <input type="text" onChange={(event) => userData({...data,username:event.target.value})}/>
        </label>
        <label>
          Password:
          <input type="password" onChange={(event)=> userData({...data,password:event.target.value})}/>
        </label>
        <button className="button-login">Login</button>
      </form>
    </>
  );
}
export default Login;
