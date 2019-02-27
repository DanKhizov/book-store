import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookListContainer.css";
import withBookstoreService from "../hoc/withBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import BookList from "../BookList";

class BookListContainer extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books, loading, error, onAddedToCart } = this.props;
		if (loading) return <Spinner />;
		if (error) return <ErrorIndicator />;

		return <BookList books={books} onAddedToCart={onAddedToCart} />;
	}
}

const mapStateToProps = ({ bookList }) => ({
	books: bookList.books,
	loading: bookList.loading,
	error: bookList.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch),
		onAddedToCart: id => dispatch(bookAddedToCart(id)),
	};
};

export default compose(
	withBookstoreService(),
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(BookListContainer);
