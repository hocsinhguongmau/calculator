import React from "react";
import Operators from "./Operators/Operators";
import Numbers from "./Numbers/Numbers";
import Equal from "./Equal/Equal";
import Ax from "../../hoc/Ax/Ax";

const Buttons = props => (
	<Ax>
		<div className="columns is-gapless is-multiline">
			<Operators />
			<div className="column is-three-quarter">
				<div className="columns is-gapless is-multiline Numbers">
					<Numbers />
				</div>
			</div>
			<div className="column is-one-quarter Equal">
				<Equal />
			</div>
		</div>
	</Ax>
);

export default Buttons;
