import React from "react";
import Button from "../Button/Button";
import FunctionContext from "../../../context/FunctionContext";

const Equal = props => (
	<FunctionContext.Consumer>
		{context => (
			<Button clicked={context.equalClicked} val="=">
				=
			</Button>
		)}
	</FunctionContext.Consumer>
);

export default Equal;
