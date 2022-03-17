import React from 'react';
import FeaturedItem from '../Featured/FeaturedItem';
import './SearchResults.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper';

const SearchResults = ({ displayProducts }) => {
	return (
		<>
			<section className="featured" id="featured">
				<h1 className="heading">
					<span>searched books</span>
				</h1>

				<div className="swiper featured-slider">
					<Swiper
						effect={'flip'}
						grabCursor={true}
						pagination={true}
						navigation={true}
						modules={[EffectFlip, Pagination, Navigation]}
						className="mySwiper"
					>
						{displayProducts.slice().map((item) => (
							<SwiperSlide key={item._id} className="swiper-slide box">
								{/* <div className="icons">
								<FiSearch id="f-icon" />
								<FiHeart id="f-icon" />
								<BsEye id="f-icon" />
							</div> */}

								<FeaturedItem item={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default SearchResults;
