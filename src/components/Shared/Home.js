import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Deal from '../Deal/Deal';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import BottomNavbar from '../Header/BottomNavbar';
import Header1 from '../Header/Header1';
import Header2 from '../Header/Header2';
import HomeBanner from '../HomeBanner/HomeBanner';
import IconContainer from '../IconContainer/IconContainer';
import NewArrival from '../NewArrival/NewArrival';
import NewsLetter from '../NewsLetter/NewsLetter';
import Reviews from '../Reviews/Reviews';

const Home = () => {
	const [cartIsSHown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<>
			{cartIsSHown && <Cart onClose={hideCartHandler} />}
			{<Header1 onShowCart={showCartHandler} />}
			<Header2 />
			<BottomNavbar />
			<HomeBanner />
			<IconContainer />
			<Featured />
			<NewsLetter />
			<NewArrival />
			<Deal />
			<Reviews />
			<Footer />
		</>
	);
};

export default Home;
