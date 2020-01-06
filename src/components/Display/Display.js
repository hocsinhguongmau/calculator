import React from "react";
import Input from "./Input/Input";

const Display = props => (
	<div className="Display">
		<div className="field">
			<div className="control">
				<Input type="text" class="input is-primary Display" />
			</div>
		</div>
	</div>
);

export default Display;
