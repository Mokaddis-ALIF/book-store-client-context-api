import React, { useContext, useState } from 'react';
import './Header1.css';
import { RiBook3Line } from 'react-icons/ri';
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';

const Header1 = (props) => {
	const [showForm, setShowForm] = useState(false);
	const cartCtx = useContext(CartContext);

	const cartItemNumbers = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const showFormController = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<div className="header-1">
				<Link to="/" className="logo">
					<RiBook3Line /> Bookly
				</Link>

				<form action="" className="search-form">
					<input
						type="search"
						name=""
						placeholder="search here..."
						id="search-box"
					/>
					<label for="search-box">
						<BsSearch />
					</label>
				</form>

				{showForm && (
					<form action="" className="search-form active">
						<input
							type="search"
							name=""
							placeholder="search here..."
							id="search-box"
						/>
						<label htmlFor="search-box">
							<BsSearch />
						</label>
					</form>
				)}

				<div className="icons">
					{/* <div id="search-btn" className="fas fa-search"></div>
					<a href="#" className="fas fa-heart"></a>
					<a href="#" className="fas fa-shopping-cart"></a>
					<div id="login-btn" className="fas fa-user"></div> */}
					<div id="search-btn" onClick={showFormController}>
						<BsSearch />
					</div>

					<RiDashboardFill />
					<div className="cart" onClick={props.onShowCart}>
						<BsFillCartFill />
						{cartItemNumbers !== 0 ? cartItemNumbers : ''}
					</div>

					<FaUserAlt />
				</div>
			</div>
		</>
	);
};

export default Header1;