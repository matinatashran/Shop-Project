import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// style
import style from "./subCategory.module.css";

// components
import ProductCard from './shared/ProductCard';

// actions
import fetchAPI from '../redux/products/productsActions';

const SubCategory = () => {

    const { allProducts } = useSelector(state => state.productsState)
    const dispatchProducts = useDispatch();

    useEffect(() => {
        if (!allProducts.length)
            dispatchProducts(fetchAPI("ALL"));
    }, [])

    const { category } = useParams();

    const discount = 50;

    return (
        <div className={style.subCategoryContainer}>
            <div className={style.title}>
                <span>{category}</span>
            </div>
            <div className={style.productsBox}>
                {
                    allProducts.map(item => item.category === category &&
                        <ProductCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                category={item.category}
                                price={item.price}
                                discount={item.id <= 4 ? discount : 0}
                                productData= {item}
                        />)
                }
            </div>
        </div>
    );
};

export default SubCategory;