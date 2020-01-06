import React from "react";
import Display from "../../components/Display/Display";
import Buttons from "../../components/Buttons/Buttons";

const Layout = () => (
	<div className="container">
		<div className="columns is-centered is-gapless">
			<div className="column is-half">
				<h1 className="title">Calculator</h1>
				<Display />
				<Buttons />
			</div>
		</div>
	</div>
);

export default Layout;
