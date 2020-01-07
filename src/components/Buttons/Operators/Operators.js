import React from "react";
import Ax from "../../../hoc/Ax/Ax";
import Button from "../Button/Button";

const Operators = props => (
	<Ax>
		<div className="column is-one-quarter Operators">
			<Button clicked={props.clickOperator} dataText="+" val="+">
				+
			</Button>
		</div>
		<div className="column is-one-quarter  Operators">
			<Button clicked={props.clickOperator} dataText="-" val="-">
				-
			</Button>
		</div>
		<div className="column is-one-quarter Operators">
			<Button clicked={props.clickOperator} dataText="x" val="*">
				x
			</Button>
		</div>
		<div className="column is-one-quarter Operators">
			<Button clicked={props.clickOperator} dataText="&divide;" val="/">
				&divide;
			</Button>
		</div>
	</Ax>
);

export default Operators;
