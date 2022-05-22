
const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalPrice: 0,
    checkout: false,
}

const totalShopping = (selectedItems, discount) => {
    const itemsCounter = selectedItems.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = selectedItems.reduce((total, product) => total + ((product.quantity * product.price) - (product.quantity * product.price * (discount / 100))), 0);
    return {itemsCounter, totalPrice};
}

const cartReducer = (state= initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            };
            return {
                ...state,
                selectedItems : [...state.selectedItems],
                ...totalShopping(state.selectedItems, action.discount),
                checkout: false
            };

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state, 
                selectedItems: [...newSelectedItems],
                ...totalShopping(newSelectedItems, action.discount),
                checkout: false
            };

        case "INCREASE_ITEM": 
            const itemIndexINC = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[itemIndexINC].quantity++;
            return {
                ...state,
                ...totalShopping(state.selectedItems, action.discount),
                checkout: false
            };

        case "DECREASE_ITEM": 
            const itemIndexDEC = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[itemIndexDEC].quantity--;
            return {
                ...state,
                ...totalShopping(state.selectedItems, action.discount),
                checkout: false
            };

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: true,
            };

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: false,
            };

        default:
            return state;
    }
}

export default cartReducer;