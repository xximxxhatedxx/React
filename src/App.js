import './App.css';
import React, { useState, useEffect } from 'react';
import PageHeader from './components/PageHeader.jsx';
import PageFooter from './components/PageFooter.jsx';
import ProductList from './components/ProductList.jsx';
import LoginModal from './components/LogInModal.jsx';
import ProductPageModal from './components/ProductPageModal.jsx';

const useConsoleLog = (state, label) => {
	useEffect(() => {
	  	console.log(`${label}:`, state);
	}, [state]);
  };
  
const useHandleComment = (products, setProducts) => {
	const handlePostingComment = (id, text) => {
	  	setProducts(prevProducts => {
			const updatedProducts = prevProducts.map(product => {
		  		if (product.id === id) {
					return { ...product, comments: [...product.comments, text] };
		  		}
		  		return product;
			});
			return updatedProducts;
	  	});
	  	alert(`Your comment: "${text}" added successfully!`);
	};
	
	return { handlePostingComment };
};

const App = () => {
	const [products, setProducts] = useState([
	  	{ id: 1, name: 'Товар 1', image: "https://imgur.com/GX3u2Qn.png", price: 45.79, comments: ["dgsdjgbnsfdijvbdpbnsb", "dbngndapgnapoi"] },
	  	{ id: 2, name: 'Товар 2', image: "https://imgur.com/GX3u2Qn.png", price: 100, comments: [] },
	  	{ id: 3, name: 'Товар 3', image: "https://imgur.com/GX3u2Qn.png", price: 200, comments: [] },
	  	{ id: 4, name: 'Товар 4', image: "https://imgur.com/GX3u2Qn.png", price: 300, comments: [] },
	  	{ id: 5, name: 'Товар 5', image: "https://imgur.com/GX3u2Qn.png", price: 400, comments: [] },
	  	{ id: 6, name: 'Товар 6', image: "https://imgur.com/GX3u2Qn.png", price: 500, comments: [] },
	  	{ id: 7, name: 'Товар 7', image: "https://imgur.com/GX3u2Qn.png", price: 600, comments: [] },
	  	{ id: 8, name: 'Товар 8', image: "https://imgur.com/GX3u2Qn.png", price: 700, comments: [] },
	  	{ id: 9, name: 'Товар 9', image: "https://imgur.com/GX3u2Qn.png", price: 800, comments: [] },
	  	{ id: 10, name: 'Товар 10', image: "https://imgur.com/GX3u2Qn.png", price: 900, comments: [] },
	  	{ id: 11, name: 'Товар 11', image: "https://imgur.com/GX3u2Qn.png", price: 1000, comments: [] },
	  	{ id: 12, name: 'Товар 12', image: "https://imgur.com/GX3u2Qn.png", price: 1100, comments: [] },
	  	{ id: 13, name: 'Товар 13', image: "https://imgur.com/GX3u2Qn.png", price: 1200, comments: [] },
	  	{ id: 14, name: 'Товар 14', image: "https://imgur.com/GX3u2Qn.png", price: 1300, comments: [] }
	]);
  
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showProductPageModal, setShowProductPageModal] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(0);
	const exchangeRate = 45.79;
  
	useConsoleLog(products, 'Products');

	useEffect(() => {
		console.log('Selected Products:', selectedProducts);
	}, [selectedProducts]);

  	const { handlePostingComment } = useHandleComment(products, setProducts);

  	const handleProductSelect = (id) => {
    	setSelectedProducts(prevSelected => {
      		const isSelected = prevSelected.includes(id);
      		return isSelected ? prevSelected.filter(productId => productId !== id) : [...prevSelected, id];
    	});
  	};

  	const handleLoginClick = () => {
    	setShowLoginModal(true);
  	};

  	const handleLogoutClick = () => {
    	setIsLoggedIn(false);
  	};

  	const handleCloseModalLogIn = () => {
  	  	setShowLoginModal(false);
  	};

  	const handleCloseModalProductPage = () => {
    	setShowProductPageModal(false);
  	};

  	const handleLogin = () => {
    	setIsLoggedIn(true);
    	setShowLoginModal(false);
  	};

  	const handleShowProductPageModal = (product) => {
    	setCurrentProduct(product);
    	setShowProductPageModal(true);
  	};
  
	return (
		<div className='app'>
			<PageHeader 
				isLoggedIn={isLoggedIn} 
				onLoginClick={handleLoginClick}
				onLogoutClick={handleLogoutClick}
		  	/>
		  	<main className='content'>
		  		<ProductList 
			  		products={products}
			  		onSelectProduct={handleProductSelect}
			  		onOpen={handleShowProductPageModal}
				/>
		  		<div>Обрано товарів: {selectedProducts.length}</div>
		  	</main>
		  	<PageFooter />
		  	<LoginModal 
				show={showLoginModal} 
				onClose={handleCloseModalLogIn} 
				onLogin={handleLogin} 
		  	/>
		  	<ProductPageModal 
		  		show={showProductPageModal}
				product={products.find(x => x.id === currentProduct)}
				onClose={handleCloseModalProductPage}
				onPostingComment={handlePostingComment}
				dollarPrice={
					(currentProduct !== 0) ? 
					(products.find(x => x.id === currentProduct).price/exchangeRate).toFixed(2) :
					null
				}
		  	/>
		</div>
	);
}


export default App;
