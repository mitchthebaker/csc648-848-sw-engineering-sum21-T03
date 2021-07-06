const INITIAL_PRODUCT_STATE = {
    title: '',
    description: '',
    price: '',
    file: '',
    filePreview: null,
    isSuccess: null,
    products: [],
};

const productReducer = (state = INITIAL_PRODUCT_STATE, action) => {

    console.log(action);

    switch(action.type) {
        case 'PRODUCT_SET_TITLE':
            return {
                ...state,
                title: action.title,
            };
        
        case 'PRODUCT_SET_DESCRIPTION':
            return {
                ...state,
                description: action.description,
            };

        case 'PRODUCT_SET_PRICE':
            return {
                ...state,
                price: action.price,
            };

        case 'PRODUCT_SET_IMAGE':
            return {
                ...state,
                file: action.image,
                filePreview: URL.createObjectURL(action.image),
            };

        case 'PRODUCT_SET_SUCCESS':
            return {
                ...state,
                isSuccess: action.isSuccess,
            }

        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        
        default:
            return state;
    }
};

export default productReducer;