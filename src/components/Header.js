import React from 'react';

// style
import style from './header.module.css';

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <section className={style.leftSection}>
                <span className={style.womenText}>WOMEN</span>
            </section>
            <section className={style.rightSection}></section>

            {/* this picture show from 768px to bottom */}
            <section className={style.menAndWomen}></section>
        </div>
    );
};

export default Header;