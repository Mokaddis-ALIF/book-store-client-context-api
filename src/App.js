import Home from './components/Shared/Home';
import CartProvider from './store/CartProvider';

function App() {
	return (
		<CartProvider>
			<Home />
		</CartProvider>
	);
}

export default App;
