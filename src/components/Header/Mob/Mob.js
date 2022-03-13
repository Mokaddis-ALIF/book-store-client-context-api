import React from 'react';
import './Mob.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

const Mob = ({ isOpen, setIsOpen }) => {
	return (
		<div className="mobile">
			<div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
				<ImCross />
			</div>
			<div className="mobile-options">
				<div className="mobile-option">
					<a href="#home">
						<AiOutlineHome className="option-icon" />
						Home
					</a>
				</div>
				<div className="mobile-option">
					<a href="#featured">
						<BiBookAlt className="option-icon" />
						Books
					</a>
				</div>
				<div className="mobile-option">
					<a href="#work">
						<BsBook className="option-icon" />
						New Arrival
					</a>
				</div>
				<div className="mobile-option">
					<a href="#contact">
						<MdOutlineRateReview className="option-icon" />
						Reviews
					</a>
				</div>
				<div className="mobile-option">
					<a href="https://drive.google.com/file/d/1onKnF96cdEf2oLInVDnLRXLEskIGw8YV/view?usp=sharing">
						<FiLogIn className="option-icon" />
						Login
					</a>
				</div>
			</div>
		</div>
	);
};

export default Mob;
