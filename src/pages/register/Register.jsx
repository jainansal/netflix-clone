import React from "react";
import "./register.scss";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";

function Register() {
  const [redirect, setRedirect] = React.useState(false);

  const login = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="register">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix-logo"
        onClick={login}
      />
      <LoginForm handleClick={login} />
    </div>
  );
}

export default Register;
