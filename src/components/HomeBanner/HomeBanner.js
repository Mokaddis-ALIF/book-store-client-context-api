import React from 'react';
import './HomeBanner.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const HomeBanner = ({ products }) => {
	return (
		<>
			<section className="home" id="home">
				<div className="row">
					<div className="content">
						<h3>upto 75% off</h3>
						<p>
							Bookselling is the commercial trading of books which is the retail
							and distribution end of the publishing process. People who engage
							in bookselling are called booksellers, bookdealers, bookpeople,
							bookmen, or bookwomen
						</p>
						<a href="#featured" className="btn">
							shop now
						</a>
					</div>

					<Swiper
						className="books-slider"
						breakpoints={{
							// when window width is >= 640px
							640: {
								width: 640,
								slidesPerView: 1,
							},
							// when window width is >= 768px
							998: {
								width: 998,
								slidesPerView: 5,
							},
						}}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
					>
						{products.slice(0, 8).map((product) => (
							<SwiperSlide className="swiper-slide" key={product.id}>
								<img src={product.img} alt="" />
							</SwiperSlide>
						))}
						<img
							src="https://i.ibb.co/3MMctCC/stand.png"
							className="stand"
							alt=""
						/>
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default HomeBanner;
