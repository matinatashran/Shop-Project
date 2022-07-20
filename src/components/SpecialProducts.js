import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// style
import style from './specialProducts.module.css';

// components
import ProductCard from './shared/ProductCard';
import Loading from './loading/Loading';

// actions
import fetchAPI from '../redux/products/productsActions';

const SpecialProducts = () => {

    const {  loading, specialProducts, error } = useSelector(state => state.productsState);
    const dispatchProducts = useDispatch();
    const discount = 50;

    useEffect(() => {
        if (!specialProducts.length)
            dispatchProducts(fetchAPI("SPECIAL"));
    }, [])

    return (
        <div className={style.SpecialProductsContainer}>
            <div className={style.title}>
                <span>Special Products</span>
            </div>
            <div className={style.productsBox}>
                {
                    loading ? 
                        <Loading/>
                    :
                        error ? <h2>{error}</h2> :
                            specialProducts.map(item => <ProductCard 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                category={item.category}
                                productData={item}
                                discount={discount}
                            />)
                }
            </div>
        </div>
    );
};

export default SpecialProducts;