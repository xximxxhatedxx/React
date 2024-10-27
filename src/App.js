import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHeader from './components/PageHeader.jsx';
import PageFooter from './components/PageFooter.jsx';
import ProductList from './components/ProductList.jsx';
import LoginModal from './components/LogInModal.jsx';
import ProductPage from './components/ProductPage.jsx';
import { ProductProvider } from './components/contexts/ProductContext';
import { AuthProvider } from './components/contexts/AuthContext.jsx';
import DebugHistoryModal from './components/DebugHistoryModal.jsx';

const App = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
    const exchangeRate = 45.79;

    const handleCloseModalLogIn = () => {
        setShowLoginModal(false);
    };

	const handleCloseHistory = () => {
        setShowHistory(false);
    };

    return (
        <ProductProvider>
            <AuthProvider>
                <Router>
                    <div className='app'>
                        <PageHeader 
                            onLoginClick={() => setShowLoginModal(true)} 
                            onLogoutClick={() => setShowLoginModal(false)}
                        />
                        <main className='content'>
                            <Routes>
                                <Route path="/" element={<ProductList/>} />
                                <Route path="/product/:id" element={<ProductPage/>} />
                            </Routes>
                        </main>
                        <PageFooter showHistoryClick={() => setShowHistory(true)}/>
                        <LoginModal 
                            show={showLoginModal} 
                            onClose={handleCloseModalLogIn} 
                        />
                        <DebugHistoryModal
							show={showHistory} 
                            onClose={handleCloseHistory}
						/>
                    </div>
                </Router>
            </AuthProvider>
        </ProductProvider>
    );
}

export default App;
