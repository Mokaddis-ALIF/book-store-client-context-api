import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Shared/Home';
import CartProvider from './store/CartProvider';
import Login from './components/Login/Login';
// import Header from './components/Header/Header';
import Register from './components/Login/Register/Register';
import Order from './components/Order/Order';
import NotFound from './components/NotFound/NotFound';
import Header1 from './components/Non-Header/Header1';
import MyOrder from './components/Order/MyOrder/MyOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

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
				{/* <Header onShowCart={showCartHandler} /> */}
				{<Header1 onShowCart={showCartHandler} />}

				<Switch>
					<Route exact path="/">
						<Home
							cartIsSHown={cartIsSHown}
							hideCartHandler={hideCartHandler}
							showCartHandler={showCartHandler}
						/>
					</Route>

					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<PrivateRoute exact path="/orders">
						<Order />
					</PrivateRoute>
					<PrivateRoute exact path="/my-orders">
						<MyOrder />
					</PrivateRoute>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</CartProvider>
	);
}

export default App;
