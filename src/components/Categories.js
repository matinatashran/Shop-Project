import React from 'react';
import { Link } from 'react-router-dom';

// style
import style from './categories.module.css';

// images
import electronics from './categories-images/Electronics.jpg';
import jewelery from './categories-images/Jewelery.jpg';
import menClothes from './categories-images/men-clothes.jpg';
import womenClothes from './categories-images/women-clothes.jpg';


const Categories = () => {
    return (
        <div className={style.categoriesContainer}>
            <div className={style.title}>
                <span>Categories</span>
            </div>
            <div className={style.categories}>
                <div className={style.category}>
                    <div className={style.image}>
                        <Link to="/categories/electronics">
                            <img src={electronics}/>
                        </Link>
                    </div>
                    <span>Electronics</span>
                </div>
                <div className={style.category}>
                    <div className={style.image}>
                        <Link to="/categories/jewelery">
                            <img src={jewelery}/>
                        </Link>
                    </div>
                    <span>Jewelery</span>
                </div>
                <div className={style.category}>
                    <div className={style.image}>
                        <Link to="/categories/men's clothing">
                            <img src={menClothes}/>
                        </Link>
                    </div>
                    <span>Men's Clothing</span>
                </div>
                <div className={style.category}>
                    <div className={style.image}>
                        <Link to="/categories/women's clothing">
                            <img src={womenClothes}/>
                        </Link>
                    </div>
                    <span>Women's Clothing</span>
                </div>
            </div>
        </div>
    );
};

export default Categories;