import React from 'react';
import './Reviews.css';
import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const reviewData = [
	{
		id: 1,
		name: 'John',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
		src: 'https://i.ibb.co/cgc0YX8/pic-1.png',
	},
	{
		id: 2,
		name: 'Sam',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
		src: 'https://i.ibb.co/KydPb6x/pic-3.png',
	},
	{
		id: 3,
		name: 'Shaw',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
		src: 'https://i.ibb.co/dDRp6N1/pic-5.png',
	},
	{
		id: 4,
		name: 'Sam',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
		src: 'https://i.ibb.co/KydPb6x/pic-3.png',
	},
	{
		id: 5,
		name: 'John',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
		src: 'https://i.ibb.co/cgc0YX8/pic-1.png',
	},
];

const Reviews = () => {
	return (
		<>
			<section className="reviews" id="reviews">
				<h1 className="heading">
					<span>client's reviews</span>
				</h1>

				<div className="swiper reviews-slider">
					<Swiper
						breakpoints={{
							// when window width is >= 640px
							640: {
								width: 640,
								slidesPerView: 1,
							},
							// when window width is >= 768px
							998: {
								width: 998,
								slidesPerView: 3,
							},
						}}
						spaceBetween={30}
						freeMode={true}
						pagination={{
							clickable: true,
						}}
						modules={[FreeMode, Pagination]}
						className="mySwiper"
					>
						{reviewData.map((r) => (
							<SwiperSlide key={r.id} className="box">
								<img src={r.src} alt="" />
								<h3>{r.name}</h3>
								<p>{r.description}</p>
								<div className="stars">
									<BsStar id="star_icon" />
									<BsStar id="star_icon" />
									<BsStar id="star_icon" />
									<BsStar id="star_icon" />
									<BsStarHalf id="star_icon" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Reviews;
