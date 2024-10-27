import React, { useState, useEffect } from 'react';
import UserComment from './UserComment';
import { useParams } from 'react-router-dom';
import { useProductContext } from './contexts/ProductContext';

const ProductPage = () => {
    const { id } = useParams();
    const { products, handlePostingComment } = useProductContext();
    const [product, setProduct] = useState(null);
    const [value, setValue] = useState("");

    useEffect(() => {
        const foundProduct = products.find((product) => product.id === Number(id));
        setProduct(foundProduct);
    }, [id, products]);

    const handleSubmit = (event) => {
        event.preventDefault();
        handlePostingComment(product.id, value);
        setValue("");
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
 
    if (!product) {
        return id;
    }

    return (
        <form onSubmit={handleSubmit} className='modal-content'>
            <img
                className='productPageImage'
                src={product.image}
                alt={product.name}
            />
            <h2>{product.name}</h2>
            <div className='productPagePrice'>
                {product.price} UAH
            </div>
            <div className='commentSection'>
                <div>Comments</div>
                {Array.isArray(product.comments) && product.comments.length === 0 ? (
                    <div>No comments here</div>
                ) : (
                    <ul type="none">
                        {Array.isArray(product.comments) && product.comments.map((comment, id) => (
                            <UserComment key={id} text={comment} />
                        ))}
                    </ul>
                )}
            </div>
            <textarea
                maxLength={150}
                placeholder='Write your comment here'
                onChange={handleChange}
                value={value}
            />
            <button type="submit" className='ProductPageModalButton'>Send</button>
        </form>
    );
};

export default ProductPage;
