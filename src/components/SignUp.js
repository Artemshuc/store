import Button from "./Button";

function SignUp() {

  const handleSignUp = () => {
    window.open('https://github.com/Artemshuc');
  };

  return (
    <>
      <Button onClick={handleSignUp}>
        Sign up
      </Button>
    </>
  );
}

export default SignUp;
