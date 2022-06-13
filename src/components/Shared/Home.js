import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import Deal from '../Deal/Deal';
import Featured from '../Featured/Featured';
import BottomNavbar from '../Non-Header/BottomNavbar';
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
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	const fetchProducts = async () => {
		const response = await fetch(
			`https://intense-springs-14031.herokuapp.com/products`
		);

		if (!response.ok) {
			throw new Error('Something went wrong!');
		}

		const data = await response.json();
		setProducts(data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchProducts().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, [setProducts]);

	if (isLoading) {
		return (
			<section className="MealsLoading">
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className="MealsError">
				<p>{httpError}</p>
			</section>
		);
	}

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
