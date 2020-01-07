import React, {Component} from "react";
import Display from "../../components/Display/Display";
import Buttons from "../../components/Buttons/Buttons";

class Layout extends Component {
	state = {
		initialValue: 0,
		hasOperator: false
	};

	numberHandler = e => {
		e.persist();
		this.setState((prevState, props) => {
			return {
				initialValue:
					prevState.initialValue === 0
						? e.target.value
						: prevState.initialValue + e.target.value,
				hasOperator: false
			};
		});
		// console.log(this.state.initialValue);
	};

	operatorHandler = e => {
		e.persist();

		this.setState((prevState, props) => {
			if (prevState.hasOperator === false) {
				return {
					initialValue:
						// prevState.initialValue + e.target.getAttribute("data-text"),
						prevState.initialValue + e.target.value,
					hasOperator: true
				};
			} else {
				const newValue = [...this.state.initialValue];
				newValue.splice(newValue.length - 1, 1);
				return {
					initialValue: newValue + e.target.value
				};
			}
		});
		// console.log(this.state.initialValue);
	};

	clearScreenHandler = () => {
		this.setState({initialValue: 0});
	};

	calculateHandler = () => {
		this.setState((prevState, props) => {
			return {
				initialValue: eval(prevState.initialValue)
			};
		});
	};

	render() {
		return (
			<div className="container">
				<div className="columns is-centered is-gapless">
					<div className="column is-half">
						<h1 className="title">Calculator</h1>
						<Display currentDisplay={this.state.initialValue} />
						<Buttons
							numberClicked={this.numberHandler}
							operatorClicked={this.operatorHandler}
							clearScreen={this.clearScreenHandler}
							calculateFunction={this.calculateHandler}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
