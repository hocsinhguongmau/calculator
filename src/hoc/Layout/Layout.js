import React, {Component} from "react";
import Display from "../../components/Display/Display";
import Buttons from "../../components/Buttons/Buttons";

class Layout extends Component {
	state = {
		number: 0,
		currentOperator: null,
		formula: null
	};

	inputHandler=()=>{
		
	}

	render() {
		return (
			<div className="container">
				<div className="columns is-centered is-gapless">
					<div className="column is-half">
						<h1 className="title">Calculator</h1>
						<Display />
						<Buttons changeInput={this.inputHandler} />
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
