import React from "react";
import "./BookList.css";
import BookListItem from "../BookListItem";

const BookList = ({ books, onAddedToCart }) => {
	const items = books.map(book => (
		<li key={book.id}>
			<BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
		</li>
	));

	return <ul className="book-list">{items}</ul>;
};

export default BookList;
