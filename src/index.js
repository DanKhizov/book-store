import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import BookstoreService from "./services/bookstoreService";
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext";

const bookstoreService = new BookstoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>,
	document.getElementById("root")
);
