import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import Blog from '../../assets/image/blog-2.jpg';
import { NavLink } from 'react-router-dom';

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleGoogleSignIn = () => {
		googleSignIn(location, history);
	};

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		loginUser(loginData.email, loginData.password, location, history);
	};

	return (
		<div className="login-page">
			<div className="login">
				<div className="login-triangle"></div>

				<h2 className="login-header">Login</h2>

				<form className="login-container" onSubmit={handleLoginSubmit}>
					<p>
						<input
							type="email"
							name="email"
							id="email"
							required
							onChange={handleOnChange}
							placeholder="Email"
						/>
					</p>
					<p>
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={handleOnChange}
							placeholder="Password"
						/>
					</p>
					<p id="login_btn">
						<input type="submit" value="Login now" />
						<input
							type="submit"
							value="Google login"
							onClick={handleGoogleSignIn}
						/>
					</p>

					<div className="register_info">
						<p>New here?</p>
						<Link to="/register" style={{ color: 'black' }}>
							Register Here
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
