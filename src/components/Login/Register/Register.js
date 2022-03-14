import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
	const [registerData, setRegisterData] = useState({});

	const { user, registerUser, authError } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newRegisterData = { ...registerData };
		newRegisterData[field] = value;

		setRegisterData(newRegisterData);
	};

	const handleRegisterSubmit = (e) => {
		if (registerData.password !== registerData.password2) {
			alert('Password did not match');
			return;
		}

		registerUser(registerData.email, registerData.password, location, history);

		e.preventDefault();
	};

	return (
		<div className="login-page">
			<div class="login">
				<div class="login-triangle"></div>

				<h2 class="login-header">Register</h2>

				<form class="login-container" onSubmit={handleRegisterSubmit}>
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
					<p>
						<input
							type="password"
							name="password2"
							id="password2"
							required
							onChange={handleOnChange}
							placeholder="Re-type password"
						/>
					</p>
					<p id="login_btn">
						<input type="submit" value="Register now" />
					</p>
					{user.email && <p>User created successfully</p>}
					{authError && <p>{authError}</p>}

					<div className="register_info">
						<p>Already an user?</p>
						<Link to="/login" style={{ color: 'black' }}>
							Login Here
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
