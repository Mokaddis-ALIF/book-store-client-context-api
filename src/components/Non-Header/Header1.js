import React, { useContext, useEffect, useState } from 'react';
import './Header1.css';
import { RiBook3Line } from 'react-icons/ri';
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header1 = ({
	onShowCart,
	setDisplayProducts,
	products,
	displayProducts,
}) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

	const [showForm, setShowForm] = useState(false);

	const cartCtx = useContext(CartContext);

	const { user, logOut } = useAuth();

	const cartItemNumbers = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const showFormController = () => {
		setShowForm(!showForm);
	};

	const handleSearch = (event) => {
		const searchText = event.target.value;

		const matchedProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchText.toLowerCase())
		);

		setDisplayProducts(matchedProducts);
	};

	useEffect(() => {
		if (cartCtx.items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
			// setMatches(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [cartCtx.items]);

	return (
		<>
			<div className="header-1">
				<Link to="/" className="logo">
					<RiBook3Line /> Bookly
				</Link>

				{showForm ? (
					<form className="search-form active">
						<input
							type="text"
							onChange={handleSearch}
							placeholder="search here..."
							id="search-box"
						/>
						<label htmlFor="search-box">
							<BsSearch />
						</label>
					</form>
				) : (
					<form action="" className="search-form">
						<input
							type="text"
							onChange={handleSearch}
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

					{!user.email ? (
						<Link to="/login" className="link-icon">
							<AiOutlineUserAdd />
						</Link>
					) : (
						<div onClick={logOut} className="link-icon">
							<AiOutlineUserDelete />
						</div>
					)}
					<Link
						style={{ color: '#444', display: 'flex', alignItems: 'center' }}
						to="/my-orders"
					>
						<RiDashboardFill />
					</Link>
					<div
						className={btnIsHighlighted ? 'cart bump' : 'cart'}
						onClick={onShowCart}
					>
						<BsFillCartFill />
						<span id="cart_quantity">
							{cartItemNumbers !== 0 ? cartItemNumbers : ''}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header1;
