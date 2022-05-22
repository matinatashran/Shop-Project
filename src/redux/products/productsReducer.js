const initialState = {
    loading: false,
    allProducts: [],
    specialProducts: [],
    error: ""
}

const productsReducer = (state= initialState, action) => {
    switch(action.type){
        case "REQUEST":
            return {
                ...state,
                loading: true,
            }
        
        case "SUCCESS_ALL":
            return {
                ...state,
                loading: false,
                allProducts: action.payload,
            }

        case "SUCCESS_SPECIAL":
            return {
                ...state,
                loading: false,            
                specialProducts: action.payload
            }
        
        case "FAILURE":
            return {
                loading: false,
                allProducts: [],
                specialProducts: [],
                error: action.payload
            }
        
        default:
            return state;
    }
}

export default productsReducer;