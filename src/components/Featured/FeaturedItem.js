import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

const FeaturedItem = ({ item }) => {
	const cartCtx = useContext(CartContext);

	const { img, name, discountedPrice, price, _id } = item;

	const addToCartHandler = () => {
		cartCtx.addItem({
			id: _id,
			name: name,
			amount: 1,
			price: price,
			img: img,
		});
	};
	return (
		<>
			<div className="image">
				<img src={img ? img : "Can't load the photo"} alt="" />
			</div>

			<div className="content">
				<h3>{name}</h3>
				<div className="price">
					${discountedPrice} <span>${price}</span>
				</div>
				<a href="#" className="btn" onClick={addToCartHandler}>
					add to cart
				</a>
			</div>
		</>
	);
};

export default FeaturedItem;
