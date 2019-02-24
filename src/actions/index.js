import {
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_FAILURE,
	BOOK_ADDED_TO_CART,
	BOOK_REMOVED_FROM_CART,
	ALL_BOOKS_REMOVED_FROM_CART,
} from "../types";

export const fetchBooks = (bookstoreService, dispatch) => () => {
	dispatch(fetchBooksRequest());
	bookstoreService
		.getBooks()
		.then(data => dispatch(fetchBooksSuccess(data)))
		.catch(err => dispatch(fetchBooksFailure(err)));
};

const fetchBooksRequest = () => {
	return {
		type: FETCH_BOOKS_REQUEST,
	};
};

const fetchBooksSuccess = newBooks => {
	return {
		type: FETCH_BOOKS_SUCCESS,
		payload: newBooks,
	};
};

const fetchBooksFailure = err => {
	return {
		type: FETCH_BOOKS_FAILURE,
		payload: err,
	};
};

export const bookAddedToCart = bookId => {
	return {
		type: BOOK_ADDED_TO_CART,
		payload: bookId,
	};
};

export const bookRemovedFromCart = bookId => {
	return {
		type: BOOK_REMOVED_FROM_CART,
		payload: bookId,
	};
};

export const allBookRemovedFromCart = bookId => {
	return {
		type: ALL_BOOKS_REMOVED_FROM_CART,
		payload: bookId,
	};
};
