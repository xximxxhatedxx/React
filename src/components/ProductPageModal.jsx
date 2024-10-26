import React, { useState } from 'react';
import UserComment from './UserComment';

const ProductPageModal = ({ show, product, onClose, onPostingComment, dollarPrice }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onPostingComment(product.id, value);
        setValue("");
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <button className="close" onClick={onClose}>×</button>
                <form onSubmit={handleSubmit} className='modal-content'>
                    <img
                        className='productPageImage'
                        src={product.image}
                        alt={product.name}
                    />
                    <h2>{product.name}</h2>
                    <div className='productPagePrice'>
                        {product.price} UAH | {dollarPrice} USD
                    </div>
                    <div className='commentSection'>
                        <div>Comments</div>
                        {product.comments.length === 0 ? (
                            <div>No comments here</div>
                        ) : (
                            <ul type="none">
                                {product.comments.map((comment, id) => (
                                    <UserComment key={id} text={comment} />
                                ))}
                            </ul>
                        )}
                    </div>
                    <textarea
                        maxLength={150}
                        placeholder='Write your comment here'
                        onChange={handleChange}
                        value={value}/>
                    <button type="submit" className='ProductPageModalButton'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ProductPageModal;
