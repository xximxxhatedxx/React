import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
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

    const handlePostingComment = (id, text) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === id) {
                    return { ...product, comments: [...product.comments, text] };
                }
                return product;
            });
        });
    };

    return (
        <ProductContext.Provider value={{ products, handlePostingComment }}>
            {children}
        </ProductContext.Provider>
    );
};
