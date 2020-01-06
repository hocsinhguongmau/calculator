import React from "react";

const Button = props => {
	return <button className={props.classes} value={props.val}>{props.children}</button>;
};

export default Button;
