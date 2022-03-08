import React from 'react';
import './Featured.css';
import { bookData } from '../Data/Data';
import { FiSearch } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Featured = () => {
	return (
		<>
			<section className="featured" id="featured">
				<h1 className="heading">
					<span>featured books</span>
				</h1>

				<div className="swiper featured-slider">
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						slidesPerGroup={3}
						loop={true}
						loopFillGroupWithBlank={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="swiper-wrapper"
					>
						{bookData.map((item) => (
							<SwiperSlide key={item.id} className="swiper-slide box">
								{/* <div className="icons">
								<FiSearch id="f-icon" />
								<FiHeart id="f-icon" />
								<BsEye id="f-icon" />
							</div> */}

								<div className="image">
									<img src={item.img} alt="" />
								</div>

								<div className="content">
									<h3>{item.name}</h3>
									<div className="price">
										${item.discountedPrice} <span>${item.price}</span>
									</div>
									<a href="#" className="btn">
										add to cart
									</a>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Featured;
