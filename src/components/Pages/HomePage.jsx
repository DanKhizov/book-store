import React from "react";
import BookListContainer from "../BookListContainer";
import ShoppingCartTable from "../ShoppingCartTable";

const HomePage = () => {
	return (
		<div>
			<BookListContainer />
			<ShoppingCartTable />
		</div>
	);
};

export default HomePage;
