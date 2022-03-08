import React, { useState } from 'react';
import './Header1.css';
import { RiBook3Line } from 'react-icons/ri';
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

const Header1 = () => {
	const [showForm, setShowForm] = useState(false);

	const showFormController = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<div className="header-1">
				<a href="#" className="logo">
					{' '}
					<RiBook3Line /> bookly{' '}
				</a>

				{/* {showForm ? (
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
				) : (
					<form action="" className="search-form active">
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
				)} */}

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
						<label for="search-box">
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
					<BsFillCartFill />
					<FaUserAlt />
				</div>
			</div>
		</>
	);
};

export default Header1;
