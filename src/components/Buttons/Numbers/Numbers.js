import React from "react";
import Ax from "../../../hoc/Ax/Ax";
import Button from "../Button/Button";

const Numbers = props => (
	<Ax>
		<div className="column is-one-third">
			<Button val="7">7</Button>
		</div>
		<div className="column is-one-third">
			<Button val="8">8</Button>
		</div>
		<div className="column is-one-third">
			<Button val="9">9</Button>
		</div>
		<div className="column is-one-third">
			<Button val="4">4</Button>
		</div>
		<div className="column is-one-third">
			<Button val="5">5</Button>
		</div>
		<div className="column is-one-third">
			<Button val="6">6</Button>
		</div>
		<div className="column is-one-third">
			<Button val="1">1</Button>
		</div>
		<div className="column is-one-third">
			<Button val="2">2</Button>
		</div>
		<div className="column is-one-third">
			<Button val="3">3</Button>
		</div>
	</Ax>
);

export default Numbers;
