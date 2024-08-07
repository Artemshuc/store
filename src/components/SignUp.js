import { useState } from "react";
import Button from "./Button";

function SignUp() {
  const [signUp, setSign] = useState (false);

  const handleSignUp = () => {
    setSign(!signUp);
  };

  return (
    <>
      <Button onClick={handleSignUp}> <a href="https://github.com/Artemshuc"></a>Sign Up</Button>
      
    </>
  );
}

export default SignUp;