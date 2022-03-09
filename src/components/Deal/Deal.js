import React from 'react';
import './Deal.css';

const Deal = () => {
	return (
		<>
			<section className="deal">
				<div className="content">
					<h3>deal of the day</h3>
					<h1>upto 50% off</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
						perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
						velit.
					</p>
					<a href="#" className="btn">
						shop now
					</a>
				</div>

				<div className="image">
					<img src="https://i.ibb.co/5FW1FFS/deal-img.jpg" alt="" />
				</div>
			</section>
		</>
	);
};

export default Deal;
