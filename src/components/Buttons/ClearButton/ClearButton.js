import React from "react";
import Button from "../Button/Button";
import FunctionContext from "../../../context/FunctionContext";

const ClearButton = props => (
	<FunctionContext.Consumer>
		{context => (
			<div className="column is-one-third">
				<Button val="clear" clicked={context.clearClicked}>
					C
				</Button>
			</div>
		)}
	</FunctionContext.Consumer>
);

export default ClearButton;
