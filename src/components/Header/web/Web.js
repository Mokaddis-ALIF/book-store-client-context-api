import './Web.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Web = () => {
	return (
		<div className="web">
			<div className="web-options">
				<a href="#home">
					<AiOutlineHome className="option-icon" />
					Home
				</a>
			</div>
			<div className="web-options">
				<a href="#featured">
					<BiBookAlt className="option-icon" />
					Books
				</a>
			</div>
			<div className="web-options">
				<a href="#arrivals">
					<BsBook className="option-icon" />
					New Arrival
				</a>
			</div>
			<div className="web-options">
				<a href="#reviews">
					<MdOutlineRateReview className="option-icon" />
					Reviews
				</a>
			</div>
			<div className="web-options">
				<a href="https://drive.google.com/file/d/1onKnF96cdEf2oLInVDnLRXLEskIGw8YV/view?usp=sharing">
					<FiLogIn className="option-icon" />
					<Link to="/login">Login</Link>
				</a>
			</div>
		</div>
	);
};

export default Web;
