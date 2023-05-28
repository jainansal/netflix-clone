import "./loginForm.scss";

function LoginForm(props) {
  return (
    <div className="login-form">
      <div className="heading">Sign In</div>
      <div className="input-fields">
        <input className="email" type="email" placeholder="Email" />
        <input className="password" type="password" placeholder="Password" />
        <div 
            className="submit-button"
            onClick={props.handleClick}
        >
            Sign In
        </div>
      </div>
      <div className="footer">
        <p>
          New to Netflix? <b>Sign up now.</b>
        </p>
        <p className="copyright">© love, ansal.</p>
      </div>
      {/* i am login form */}
    </div>
  );
}

export default LoginForm;
