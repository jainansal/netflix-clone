import "./register.scss";
import LoginForm from "../../components/loginForm/LoginForm";

function Register() {
  return (
    <div className="register">
        <img 
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
            alt="netflix-logo" />
        <LoginForm />
    </div>
  );
}

export default Register;
