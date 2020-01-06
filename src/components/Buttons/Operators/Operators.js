import React from "react";
import Ax from "../../../hoc/Ax/Ax";
import Button from "../Button/Button";

const Operators = props => (
	<Ax>
		<div className="column is-one-quarter Operators">
			<Button val="+">
				+
			</Button>
		</div>
		<div className="column is-one-quarter  Operators">
			<Button val="-">
				&minus;
			</Button>
		</div>
		<div className="column is-one-quarter Operators">
			<Button val="*">
				&times;
			</Button>
		</div>
		<div className="column is-one-quarter Operators">
			<Button val="/">
				&divide;
			</Button>
		</div>
	</Ax>
);

export default Operators;
