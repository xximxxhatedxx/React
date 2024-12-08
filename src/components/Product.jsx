import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'antd';

const Product = ({ product, onSelect, isSelected }) => {
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    onSelect(product.id);
  };

  const handleClickProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="productContainer">
      <img
        className="productImage"
        src={product.image}
        alt={product.name}
      />
      <div className="productName" onClick={handleClickProduct}>
        {product.name}
      </div>
      <div className="productPrice">{product.price}</div>
      <Checkbox onChange={handleCheckboxChange} checked={isSelected}>
        Select
      </Checkbox>
    </div>
  );
};

export default Product;
