import React, { useEffect, useState, createContext } from 'react';

// services
import { getAllProducts, getSpecialProducts} from '../services/api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [specialProducts, setSpecialProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setAllProducts(await getAllProducts());
            setSpecialProducts(await getSpecialProducts());
        }

        fetchAPI();
    }, [])

    return (
        <ProductsContext.Provider value={{allProducts, specialProducts}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;