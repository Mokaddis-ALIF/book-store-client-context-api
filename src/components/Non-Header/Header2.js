import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header2.css';

const Header2 = () => {
	const { user, logOut, authError } = useAuth();
	console.log(user);
	return (
		<>
			<div className="header-2">
				<nav className="navbar">
					<a href="#home">home</a>
					<a href="#featured">featured</a>
					<a href="#arrivals">arrivals</a>
					<a href="#reviews">reviews</a>
					<a href="#blogs">blogs</a>

					{user ? (
						<button onClick={logOut}>Logout</button>
					) : (
						<Link to="/login">Login</Link>
					)}
					{authError && <p>authError</p>}
				</nav>
			</div>
		</>
	);
};

export default Header2;
