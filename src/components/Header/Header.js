import React, { useContext, useState } from 'react';
import './Header.css';
import Mob from './Mob/Mob';
import Web from './web/Web';
import { IoMdMenu } from 'react-icons/io';
import { BiBookAlt } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import useAuth from '../../Hooks/useAuth';

const Header = ({ onShowCart }) => {
	const { user, logOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const cartCtx = useContext(CartContext);

	const cartItemNumbers = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);

	return (
		<div className="header">
			<div className="logo">
				<Link to="/" style={{ color: 'white' }}>
					<BiBookAlt /> Bookify
				</Link>
			</div>
			<div className="menu">
				<div className="web-menu">
					<Web user={user} logOut={logOut} />
				</div>
			</div>
			<div className="cart-modal" onClick={onShowCart}>
				<HiOutlineShoppingBag /> {cartItemNumbers > 0 ? cartItemNumbers : ''}
			</div>
			<div className="mobile-menu">
				<div onClick={() => setIsOpen(!isOpen)}>
					<IoMdMenu className="menu-icon" />
				</div>
				{isOpen && <Mob isOpen={isOpen} setIsOpen={setIsOpen} />}
			</div>
		</div>
	);
};

export default Header;
