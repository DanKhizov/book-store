import React from "react";
import "./BookListItem.css";

const BookListItem = ({ book, onAddedToCart }) => {
	const { title, author, price, coverImage } = book;
	return (
		<div className="book-list-item">
			<div className="book-cover">
				<img src={coverImage} alt="book-cover" />
			</div>
			<div className="book-details">
				<span>{title}</span>
				<span>{author}</span>
				<span>${price}</span>
				<button onClick={onAddedToCart} className="btn btn-info add-to-cart">
					Buy
				</button>
			</div>
		</div>
	);
};

export default BookListItem;
