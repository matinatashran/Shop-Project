export const addItem = (productData, discount) => {
    return { type:"ADD_ITEM", payload: productData, discount: discount }
}

export const removeItem = (productData, discount) => {
    return { type:"REMOVE_ITEM", payload: productData, discount: discount }
}

export const increaseItem = (productData, discount) => {
    return { type:"INCREASE_ITEM", payload: productData, discount: discount }
}

export const decreaseItem = (productData, discount) => {
    return { type:"DECREASE_ITEM", payload: productData, discount: discount }
}

export const checkout = () => {
    return { type:"CHECKOUT" }
}

export const clear = () => {
    return { type:"CLEAR" }
}

