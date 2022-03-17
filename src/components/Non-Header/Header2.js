import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header2.css';

const Header2 = () => {
	const { user, logOut } = useAuth();

	return (
		<>
			<div className="header-2">
				<nav className="navbar">
					<a href="#featured">Books</a>
					<a href="#arrivals">New arrivals</a>
					<a href="#newsletter">contacts</a>
					<a href="#reviews">reviews</a>

					{user.email ? (
						<a href onClick={logOut}>
							Logout
						</a>
					) : (
						<Link to="/login">Login</Link>
					)}
				</nav>
			</div>
		</>
	);
};

export default Header2;
