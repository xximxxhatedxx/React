import './App.css';
import React from 'react';
import PageHeader from './components/PageHeader.jsx';
import PageFooter from './components/PageFooter.jsx';
import ProductList from './components/ProductList.jsx';
import LoginModal from './components/LogInModal.jsx';

class App extends React.Component {
	state = {
		products: [
			{ id: 1, name: 'Товар 1' },
			{ id: 2, name: 'Товар 2' },
			{ id: 3, name: 'Товар 3' }
	  	],
	  	selectedProducts: [],
	  	isLoggedIn: false,
	  	showLoginModal: false
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
  
	handleCloseModal = () => {
	  	this.setState({ showLoginModal: false });
	};
  
	handleLogin = () => {
	  	this.setState({ isLoggedIn: true, showLoginModal: false });
	};
  
	render() {
	  	return (
			<div className='app'>
		  		<PageHeader 
					isLoggedIn={this.state.isLoggedIn} 
					onLoginClick={this.handleLoginClick} 
					onLogoutClick={this.handleLogoutClick} 
		  		/>
		  		<main className='content'>
		  			<ProductList products={this.state.products} onSelectProduct={this.handleProductSelect} />
		  			<div>Обрано товарів: {this.state.selectedProducts.length}</div>
				</main>
		  		<PageFooter />
		  		<LoginModal 
					show={this.state.showLoginModal} 
					onClose={this.handleCloseModal} 
					onLogin={this.handleLogin} 
		  		/>
			</div>
	  	);
	}
}

export default App;
