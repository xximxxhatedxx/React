import React, { useState } from 'react';
import Product from './Product';
import { useProductContext } from './contexts/ProductContext';
import { Button } from 'antd';

const ProductList = () => {
  const { products } = useProductContext();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const selectAllProducts = () => {
    setSelectedProducts(products.map((product) => product.id));
  };

  return (
    <div>
      <Button type="primary" onClick={selectAllProducts} style={{ marginBottom: '10px' }}>
          Select All
        </Button>
      <div className="productListContainer">
        
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onSelect={handleSelectProduct}
            isSelected={selectedProducts.includes(product.id)}
          />
        ))}
      </div>
    </div>
    
  );
};

export default ProductList;
