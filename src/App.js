import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import ProductList from './components/ProductList';
import LoginModal from './components/LogIn/LogInModal';
import ProfilePage from './components/ProfilePage';
import AdminPage from './components/AdminPage';
import { ProductProvider } from './components/contexts/ProductContext';
import { AuthProvider } from './components/contexts/AuthContext';

const App = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <ProductProvider>
            <AuthProvider>
                <Router>
                    <div className="app">
                        <PageHeader onLoginClick={() => setShowLoginModal(true)} />
                        <main className="content">
                            <Routes>
                                <Route path="/" element={<ProductList />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/admin" element={<AdminPage />} />
                            </Routes>
                        </main>
                        <PageFooter />
                        <LoginModal
                            show={showLoginModal}
                            onClose={() => setShowLoginModal(false)}
                        />
                    </div>
                </Router>
            </AuthProvider>
        </ProductProvider>
    );
};

export default App;
