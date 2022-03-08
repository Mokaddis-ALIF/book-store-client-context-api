import React from 'react';
import './HomeBanner.css';
import { bookData } from '../Data/Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const HomeBanner = () => {
	return (
		<>
			<section class="home" id="home">
				<div class="row">
					<div class="content">
						<h3>upto 75% off</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
							deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
							ex minima at!
						</p>
						<a href="#" class="btn">
							shop now
						</a>
					</div>

					{/* <div class="swiper books-slider">
            <div class="swiper-wrapper">
                <a href="#" class="swiper-slide"><img src="image/book-1.png" alt=""></a>
                <a href="#" class="swiper-slide"><img src="image/book-2.png" alt=""></a>
                <a href="#" class="swiper-slide"><img src="image/book-3.png" alt=""></a>
                <a href="#" class="swiper-slide"><img src="image/book-4.png" alt=""></a>
                <a href="#" class="swiper-slide"><img src="image/book-5.png" alt=""></a>
                <a href="#" class="swiper-slide"><img src="image/book-6.png" alt=""></a>
            </div>
            <img src="image/stand.png" class="stand" alt=""/>
        </div> */}

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
						{bookData.slice(0, 8).map((product) => (
							<SwiperSlide className="swiper-slide" key={product.id}>
								<img src={product.img} alt="" />
							</SwiperSlide>
						))}
						<img
							src="https://i.ibb.co/3MMctCC/stand.png"
							class="stand"
							alt=""
						/>
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default HomeBanner;
