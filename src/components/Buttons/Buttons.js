import React from "react";
import Operators from "./Operators/Operators";
import Numbers from "./Numbers/Numbers";
import Equal from "./Equal/Equal";
import ClearButton from "./ClearButton/ClearButton";
import Ax from "../../hoc/Ax/Ax";

const Buttons = props => (
	<Ax>
		<div className="columns buttons">
			<Operators clickOperator={props.operatorClicked}/>
			<div className="column is-three-quarter">
				<div className="columns Numbers">
					<Numbers/>
					<ClearButton />
				</div>
			</div>
			<div className="column is-one-quarter Equal">
				<Equal />
			</div>
		</div>
	</Ax>
);

export default Buttons;
