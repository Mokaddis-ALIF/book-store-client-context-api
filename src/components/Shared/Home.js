import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Deal from '../Deal/Deal';
import Featured from '../Featured/Featured';
// import BottomNavbar from '../Non-Header/BottomNavbar';
// import Header1 from '../Header/Header1';
// import Header2 from '../Header/Header2';
import HomeBanner from '../HomeBanner/HomeBanner';
import IconContainer from '../IconContainer/IconContainer';
import NewArrival from '../NewArrival/NewArrival';
import NewsLetter from '../NewsLetter/NewsLetter';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

const Home = ({ cartIsSHown, hideCartHandler }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			{cartIsSHown && <Cart onClose={hideCartHandler} />}
			{/* {<Header1 onShowCart={showCartHandler} />}
			<Header2 /> */}
			{/* <BottomNavbar /> */}
			<HomeBanner products={products} />
			<IconContainer />
			<Featured products={products} />
			<NewsLetter />
			<NewArrival products={products} />
			<Deal />
			<Reviews />
			<Footer />
		</>
	);
};

export default Home;
