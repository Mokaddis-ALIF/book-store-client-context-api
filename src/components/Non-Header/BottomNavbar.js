import React from 'react';
import './BottomNavbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';
import { ImBlogger } from 'react-icons/im';

const BottomNavbar = () => {
	return (
		<>
			<nav className="bottom-navbar">
				<a href="#home">
					<AiOutlineHome id="nav__icon" />
				</a>
				<a href="#featured">
					<MdOutlineFeaturedPlayList id="nav__icon" />
				</a>
				<a href="#arrivals">
					<BsFillJournalBookmarkFill id="nav__icon" />
				</a>
				<a href="#reviews">
					<MdOutlineRateReview id="nav__icon" />
				</a>
				<a href="#blogs">
					<ImBlogger id="nav__icon" />
				</a>
			</nav>
		</>
	);
};

export default BottomNavbar;
