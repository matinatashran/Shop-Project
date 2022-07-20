import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// style
import style from './allProducts.module.css';

// components
import ProductCard from './shared/ProductCard';
import Loading from './loading/Loading';

// actions
import fetchAPI from '../redux/products/productsActions';

const AllProducts = () => {

    const { loading, allProducts, error } = useSelector(state => state.productsState)
    const dispatchProducts = useDispatch();
    const discount = 0;

    useEffect(() => {
        if (!allProducts.length)
            dispatchProducts(fetchAPI("ALL"));
    }, [])

    return (
        <div className={style.AllProductsContainer}>
            <div className={style.title}>
                <span>All Products</span>
            </div>
            <div className={style.productsBox}>
                {
                    loading ?
                        <Loading/>
                    :
                        error ? <h2>{error}</h2> :
                            allProducts.map(item => item.id > 4 &&
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    category={item.category}
                                    price={item.price}
                                    discount={discount}
                                    productData= {item}
                                />)
                }
            </div>
        </div>
    );
};

export default AllProducts;