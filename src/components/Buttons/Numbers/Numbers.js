import React from "react";
import Ax from "../../../hoc/Ax/Ax";
import Button from "../Button/Button";
import FunctionContext from "../../../context/FunctionContext";

const Numbers = props => (
	<FunctionContext.Consumer>
		{context => (
			<Ax>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="7">
						7
					</Button>
				</div>

				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="8">
						8
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="9">
						9
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="4">
						4
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="5">
						5
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="6">
						6
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="1">
						1
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="2">
						2
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="3">
						3
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val="0">
						0
					</Button>
				</div>
				<div className="column is-one-third">
					<Button clicked={context.numberClicked} val=".">
						.
					</Button>
				</div>
			</Ax>
		)}
	</FunctionContext.Consumer>
);

export default Numbers;
