import classes from "./CustomInputWithLabel.module.css";
import { Icon } from "semantic-ui-react";

const CustomInputWithLabel = (props) => {
  return (
    <div className={classes.customInput}>
      <div className={classes.inputLabel}>
        <Icon name={props.iconName} size="small"></Icon>
        <label>{props.fieldLabel}</label>
      </div>
      <input placeholder={props.placeholder} type={props.inputType}></input>
    </div>
  );
};

export default CustomInputWithLabel;
