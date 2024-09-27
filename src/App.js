import './App.css';
import React from 'react';
import PageHeader from './components/PageHeader.jsx';
import PageFooter from './components/PageFooter.jsx';
import ProductList from './components/ProductList.jsx';
import LoginModal from './components/LogInModal.jsx';
import ProductPageModal from './components/ProductPageModal.jsx';

class App extends React.Component {
	state = {
	  products: [
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
	  ],
	  selectedProducts: [],
	  isLoggedIn: false,
	  showLoginModal: false,
	  showProductPageModal: false,
	  currentProduct: 0,
	  exchangeRate : 45.79
	};
  
	handleProductSelect = (id) => {
	  this.setState((prevState) => {
		const isSelected = prevState.selectedProducts.includes(id);
		const selectedProducts = isSelected
		  ? prevState.selectedProducts.filter(productId => productId !== id)
		  : [...prevState.selectedProducts, id];
  
		return { selectedProducts };
	  });
	};
  
	handleLoginClick = () => {
	  this.setState({ showLoginModal: true });
	};
  
	handleLogoutClick = () => {
	  this.setState({ isLoggedIn: false });
	};
  
	handleCloseModalLogIn = () => {
	  this.setState({ showLoginModal: false });
	};

	handleCloseModalProductPage = () => {
	  this.setState({ showProductPageModal: false });
	};
  
	handleLogin = () => {
	  this.setState({ isLoggedIn: true, showLoginModal: false });
	};

	handleShowProductPageModal = (product) => {
	  this.setState({ showProductPageModal: true, currentProduct: product })
	}

	handlePostingComment = (id, text) => {
	  this.setState(prevState => {
		const update = prevState.products.map(product =>{
			if (product.id === id){
				return {...product, comments: [...product.comments, text]}
			}
			return product
		})

		return {products: update}
	  })
	  alert(`Your comment: "${text}" added successfully!`)
	}
  
	render() {
	  return (
		<div className='app'>
		  <PageHeader 
			isLoggedIn={this.state.isLoggedIn} 
			onLoginClick={this.handleLoginClick}
			onLogoutClick={this.handleLogoutClick}
		  />
		  <main className='content'>
		  	<ProductList 
			  products={this.state.products}
			  onSelectProduct={this.handleProductSelect}
			  onOpen={this.handleShowProductPageModal}
			/>
		  	<div>Обрано товарів: {this.state.selectedProducts.length}</div>
		  </main>
		  <PageFooter />
		  <LoginModal 
			show={this.state.showLoginModal} 
			onClose={this.handleCloseModalLogIn} 
			onLogin={this.handleLogin} 
		  />
		  <ProductPageModal 
		  	show={this.state.showProductPageModal}
			product={this.state.products.find(x => x.id === this.state.currentProduct)}
			onClose={this.handleCloseModalProductPage}
			onPostingComment={this.handlePostingComment}
			dollarPrice={
				(this.state.currentProduct !== 0) ? 
				(this.state.products.find(x => x.id === this.state.currentProduct).price/this.state.exchangeRate).toFixed(2) :
				null
			}
		  />
		</div>
	  );
	}
}

export default App;
