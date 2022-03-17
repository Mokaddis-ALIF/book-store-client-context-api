import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Deal from '../Deal/Deal';
import Featured from '../Featured/Featured';
import BottomNavbar from '../Non-Header/BottomNavbar';
// import Header1 from '../Non-Header/Header1';
import Header2 from '../Non-Header/Header2';
import HomeBanner from '../HomeBanner/HomeBanner';
import IconContainer from '../IconContainer/IconContainer';
import NewArrival from '../NewArrival/NewArrival';
import NewsLetter from '../NewsLetter/NewsLetter';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import SearchResults from '../SearchResults/SearchResults';
const Home = ({
	cartIsSHown,
	hideCartHandler,
	displayProducts,
	products,
	setProducts,
}) => {
	useEffect(() => {
		fetch(`https://intense-springs-14031.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [setProducts]);

	return (
		<>
			{cartIsSHown && <Cart onClose={hideCartHandler} />}
			<Header2 />

			<BottomNavbar />
			<HomeBanner products={products} />
			{displayProducts.length > 0 && (
				<SearchResults displayProducts={displayProducts} />
			)}
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
