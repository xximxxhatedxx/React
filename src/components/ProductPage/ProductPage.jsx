import React, { useState, useEffect } from 'react';
import UserComment from './UserComment';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import styles from './ProductPage.module.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        <form onSubmit={handleSubmit} className={styles.container}>
            <img
                className={styles.productImage}
                src={product.image}
                alt={product.name}
            />
            <h2>{product.name}</h2>
            <div className={styles.productPrice}>
                {product.price} UAH
            </div>
            <div className={styles.comments}>
                <div>Comments</div>
                {Array.isArray(product.comments) && product.comments.length === 0 ? (
                    <div>No comments here</div>
                ) : (
                    <TransitionGroup className={styles.commentsList}>
                        {product.comments.map((comment, id) => (
                            <CSSTransition key={id} timeout={300} classNames={{
                                enter: styles.commentEnter,
                                enterActive: styles.commentEnterActive,
                                exit: styles.commentExit,
                                exitActive: styles.commentExitActive
                            }}>
                                <UserComment text={comment} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </div>
            <textarea
                maxLength={150}
                placeholder='Write your comment here'
                onChange={handleChange}
                value={value}
                className={styles.commentInput}
            />
            <button type="submit" className={styles.commentButton}>Send</button>
        </form>
    );
};

export default ProductPage;
