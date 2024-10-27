import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product, onSelect, onOpen}) => {
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    onSelect(product.id);
  };

  const handleClickProduct = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div className="productContainer">
      <img className='productImage'
          src={product.image}
          alt={product.name}
      />
      <div className='productName' onClick={() => handleClickProduct(product.id)}>{product.name}</div>
      <div className='productPrice'>{product.price}</div>
      <input type="checkbox" onChange={handleCheckboxChange} />
      
    </div>
  );
}

export default Product;