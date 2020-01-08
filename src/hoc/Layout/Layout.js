import React, {Component} from "react";
import Display from "../../components/Display/Display";
import Buttons from "../../components/Buttons/Buttons";
import FunctionContext from "../../context/FunctionContext";

class Layout extends Component {
	state = {
		initialValue: 0,
		hasOperator: false,
		calculated: false
	};

	numberHandler = e => {
		e.persist();
		this.setState((prevState, props) => {
			if (!prevState.calculated) {
				return {
					initialValue:
						prevState.initialValue === 0
							? e.target.value
							: prevState.initialValue + e.target.value,
					hasOperator: false
				};
			} else {
				return {
					initialValue: e.target.value,
					hasOperator: false,
					calculated: false
				};
			}
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
					hasOperator: true,
					calculated: false
				};
			} else {
				const newValue = [...this.state.initialValue];
				newValue.splice(newValue.length - 1, 1);
				return {
					initialValue: newValue.join("") + e.target.value
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
			try {
				Function(
					'"use strict"; return(' + prevState.initialValue + ")"
				)();
			} catch (e) {
				if (e instanceof SyntaxError) {
					alert(e.message);
					return;
				}
			}

			return {
				initialValue: Function(
					'"use strict"; return(' + prevState.initialValue + ")"
				)(),
				calculated: true
			};
		});
	};

	render() {
		return (
			<div className="container">
				<div className="columns is-centered">
					<div className="column calculator">
						<h1 className="title">Calculator</h1>
						<Display currentDisplay={this.state.initialValue} />
						<FunctionContext.Provider
							value={{
								numberClicked: this.numberHandler,
								operatorClicked: this.operatorHandler,
								clearClicked: this.clearScreenHandler,
								equalClicked: this.calculateHandler
							}}
						>
							<Buttons
								numberClicked={this.numberHandler}
								operatorClicked={this.operatorHandler}
								clearClicked={this.clearScreenHandler}
								equalClicked={this.calculateHandler}
							/>
						</FunctionContext.Provider>
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
