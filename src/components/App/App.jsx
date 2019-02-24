import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, CardPage } from "../Pages";
import ShopHeader from "../ShopHeader/ShopHeader";

const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={142} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/cart" component={CardPage} />
			</Switch>
		</main>
	);
};

export default App;
