import React from 'react';
import Featured from '../Featured/Featured';
import BottomNavbar from '../Header/BottomNavbar';
import Header1 from '../Header/Header1';
import Header2 from '../Header/Header2';
import HomeBanner from '../HomeBanner/HomeBanner';
import IconContainer from '../IconContainer/IconContainer';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
	return (
		<>
			<Header1 />
			<Header2 />
			<BottomNavbar />
			<HomeBanner />
			<IconContainer />
			<Featured />
			<NewsLetter />
		</>
	);
};

export default Home;
