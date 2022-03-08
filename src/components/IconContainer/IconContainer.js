import React from 'react';
import './IconContainer.css';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import { GiReturnArrow } from 'react-icons/gi';
import { IoMdCall } from 'react-icons/io';

const iconData = [
	{
		id: 1,
		title: 'free shipping',
		condition: 'order over $100',
		icon: MdOutlineLocalShipping,
	},
	{
		id: 2,
		title: 'secure payment',
		condition: '100 secure payment',
		icon: FiLock,
	},
	{
		id: 3,
		title: 'easy returns',
		condition: '10 day returns',
		icon: GiReturnArrow,
	},
	{
		id: 4,
		title: '24/7 support',
		condition: 'call us anytime',
		icon: IoMdCall,
	},
];

const IconContainer = () => {
	return (
		<>
			<section class="icons-container">
				{iconData.map((item) => (
					<div class="icons" key={item.id}>
						<item.icon id="icon-item" />
						<div class="content">
							<h3>{item.title}</h3>
							<p>{item.condition}</p>
						</div>
					</div>
				))}
			</section>
		</>
	);
};

export default IconContainer;
