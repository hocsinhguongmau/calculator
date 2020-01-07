import React from "react";
import Button from "../Button/Button";

const Equal = props => (
	<Button clicked={props.calculate} val="=">
		=
	</Button>
);

export default Equal;
