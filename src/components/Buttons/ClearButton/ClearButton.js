import React from "react";
import Button from "../Button/Button";

const ClearButton = props => (
	<div className="column is-one-third">
		<Button val="clear" clicked={props.clear}>C</Button>
	</div>
);

export default ClearButton;
