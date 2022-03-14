import './Web.css';
import { AiOutlineMessage } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Web = ({ user, logOut }) => {
	return (
		<div className="web">
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
				<a href="#newsletter">
					<AiOutlineMessage className="option-icon" />
					Contact
				</a>
			</div>
			<div className="web-options">
				<a href="#reviews">
					<MdOutlineRateReview className="option-icon" />
					Reviews
				</a>
			</div>
			{user.email ? (
				<div className="web-options" onClick={logOut} id="login">
					<FiLogOut className="option-icon" />
					Logout
				</div>
			) : (
				<div className="web-options" id="logout">
					<FiLogIn className="option-icon" />
					<Link to="/login">Login</Link>
				</div>
			)}
		</div>
	);
};

export default Web;
