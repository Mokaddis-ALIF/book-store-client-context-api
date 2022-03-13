import React, { useState } from 'react';
import './Header.css';
import Mob from './Mob/Mob';
import Web from './web/Web';
import { IoMdMenu } from 'react-icons/io';
import { BiBookAlt } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = ({ onShowCart }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="header">
			<div className="logo">
				<Link to="/" style={{ color: 'white' }}>
					<BiBookAlt /> Bookify
				</Link>
			</div>
			<div className="menu">
				<div className="web-menu">
					<Web />
				</div>
			</div>
			<div className="cart-modal" onClick={onShowCart}>
				<HiOutlineShoppingBag />
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
