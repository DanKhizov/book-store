import React from "react";
import "./ShoppingCartTable.css";

import { connect } from "react-redux";
import {
	bookAddedToCart,
	bookRemovedFromCart,
	allBookRemovedFromCart,
} from "../../actions";

const ShoppingCartTable = props => {
	const { cartItems, orderTotal, onIncrease, onDecrease, onDelete } = props;

	const tableRow = (item, idx) => {
		const { id, title, count, total } = item;
		return (
			<tr key={id}>
				<td>{idx + 1}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>${total}</td>
				<td>
					<button
						onClick={() => onDelete(id)}
						className="btn btn-outline-danger btn-sm float-right"
					>
						<i className="fa fa-trash-o" />
					</button>
					<button
						onClick={() => onIncrease(id)}
						className="btn btn-outline-success btn-sm float-right"
					>
						<i className="fa fa-plus-circle" />
					</button>
					<button
						onClick={() => onDecrease(id)}
						className="btn btn-outline-warning btn-sm float-right"
					>
						<i className="fa fa-minus-circle" />
					</button>
				</td>
			</tr>
		);
	};

	const tableBody = cartItems.map((item, idx) => tableRow(item, idx));

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</table>

			<div className="total">Total: ${orderTotal}</div>
		</div>
	);
};

const mapStateToProps = ({ shoppingCart }) => ({
	cartItems: shoppingCart.cartItems,
	orderTotal: shoppingCart.orderTotal,
});

const mapDispatchToProps = {
	onIncrease: bookAddedToCart,
	onDecrease: bookRemovedFromCart,
	onDelete: allBookRemovedFromCart,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingCartTable);
