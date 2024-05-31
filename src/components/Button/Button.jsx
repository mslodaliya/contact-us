import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { isOutline, icon, text, ...rest } = props;
  // console.log(props)
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
