import classes from "./AuthBox.module.css";

const AuthBox = (props) => {
  return <div className={classes.authBox}>{props.children}</div>;
};

export default AuthBox;
