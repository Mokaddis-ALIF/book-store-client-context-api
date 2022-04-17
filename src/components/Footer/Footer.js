import React from 'react';
import './Footer.css';
import { GoLocation } from 'react-icons/go';
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';

const Footer = () => {
	return (
		<>
			<section className="footer">
				<div className="box-container">
					<div className="box">
						<h3>our locations</h3>
						<a href="#">
							{' '}
							<GoLocation className="footer_icon" /> india{' '}
						</a>
						<a href="#">
							{' '}
							<GoLocation className="footer_icon" /> USA{' '}
						</a>
						<a href="#">
							{' '}
							<GoLocation className="footer_icon" /> russia{' '}
						</a>
						<a href="#">
							{' '}
							<GoLocation className="footer_icon" /> france{' '}
						</a>
						<a href="#">
							{' '}
							<GoLocation className="footer_icon" /> japan{' '}
						</a>
						<a href="#">
							{' '}
							<GoLocation className="footer_icon" /> africa{' '}
						</a>
					</div>

					<div className="box">
						<h3>quick links</h3>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> home{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> featured{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> arrivals{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> reviews{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> blogs{' '}
						</a>
					</div>

					<div className="box">
						<h3>extra links</h3>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> account info{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> ordered items{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> privacy policy{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> payment method{' '}
						</a>
						<a href="#">
							{' '}
							<BiRightArrowAlt className="footer_icon-right" /> our serivces{' '}
						</a>
					</div>

					<div className="box">
						<h3>contact info</h3>
						<a href="#">
							{' '}
							<AiOutlinePhone className="footer_icon_contact" /> +8801673913970{' '}
						</a>
						<a href="#">
							{' '}
							<AiOutlinePhone className="footer_icon_contact" /> +8801673913970{' '}
						</a>
						<a href="#">
							{' '}
							<BiEnvelope className="footer_icon_contact" />{' '}
							mokaddis.alif@gmail.com{' '}
						</a>
						<img src="image/worldmap.png" className="map" alt="" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
