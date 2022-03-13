import React from 'react';
import './NewArrival.css';
import { BsFillStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';

const NewArrival = ({ products }) => {
	return (
		<>
			<section className="arrivals" id="arrivals">
				<h1 className="heading">
					<span>new arrivals</span>
				</h1>

				<div className="swiper arrivals-slider">
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
						slidesPerGroup={3}
						loop={true}
						loopFillGroupWithBlank={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper"
					>
						{products.slice(3, 9).map((item) => (
							<SwiperSlide key={item._id} className="swiper-slide box">
								<div className="image">
									<img src={item.img} alt="" />
								</div>
								<div className="content">
									<h3>new arrivals</h3>
									<div className="price">
										${item.discountedPrice} <span>${item.price}</span>
									</div>
									<div className="stars">
										<BsFillStarFill id="star_icon" />
										<BsFillStarFill id="star_icon" />
										<BsFillStarFill id="star_icon" />
										<BsFillStarFill id="star_icon" />
										<BsStarHalf id="star_icon" />
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default NewArrival;
