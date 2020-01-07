import React from "react";

const functionContext = React.createContext({
	numberClicked: () => {},
	operatorClicked: () => {},
	equalClicked: () => {},
	clearClicked: () => {}
});

export default functionContext;
