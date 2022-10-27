import classes from "./AuthForm.module.css";
import CustomInputWithLabel from "../components/UI/CustomInputWithLabel";

const AuthForm = () => {
  const alternateLink = (
    <a className={classes["alternate-link"]} href="">
      Sign Up here
    </a>
  );

  return (
    <div>
      <header className={classes.header}>
        <h1>Sign In</h1>
      </header>
      <section>
        <form className={classes.AuthForm}>
          <div>
            <CustomInputWithLabel
              iconName="mail"
              fieldLabel="Email Address"
              placeholder="Enter your email address here"
              inputType="email"
            ></CustomInputWithLabel>
            <CustomInputWithLabel
              iconName="key"
              fieldLabel="Password"
              placeholder="Enter your password here"
              inputType="password"
            ></CustomInputWithLabel>
            <div className={classes.formLink}>
              <div></div>
              <a href="forger_password">Forgot Password?</a>
            </div>
          </div>
          <div className={classes.formButton}>
            <button type="submit">Sign In</button>
          </div>
          <div className={classes.alterate}>
            Didn't have an account yet {alternateLink}
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
