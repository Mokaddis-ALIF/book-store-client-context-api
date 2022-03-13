import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Shared/Home';
import CartProvider from './store/CartProvider';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Login/Register/Register';

function App() {
	const [cartIsSHown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			<Router>
				<Header onShowCart={showCartHandler} />

				<Switch>
					<Route exact path="/">
						<Home cartIsSHown={cartIsSHown} hideCartHandler={hideCartHandler} />
					</Route>

					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</CartProvider>
	);
}

export default App;
