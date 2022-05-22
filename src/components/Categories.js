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
                <div>
                    <Link to="/categories/electronics">
                        <div>
                            <img src={electronics}/>
                        </div>
                    </Link>
                    <span>Electronics</span>
                </div>
                <div>
                    <Link to="/categories/jewelery">
                        <div>
                            <img src={jewelery}/>
                        </div>
                    </Link>
                    <span>Jewelery</span>
                </div>
                <div>
                    <Link to="/categories/men's clothing">
                        <div>
                            <img src={menClothes}/>
                        </div>
                    </Link>
                    <span>Men's Clothing</span>
                </div>
                <div>
                    <Link to="/categories/women's clothing">
                        <div>
                            <img src={womenClothes}/>
                        </div>
                    </Link>
                    <span>Women's Clothing</span>
                </div>
            </div>
        </div>
    );
};

export default Categories;