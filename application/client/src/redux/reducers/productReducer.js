const INITIAL_PRODUCT_STATE = {
    title: '',
    description: '',
    price: '',
    category: '',
    file: '',
    filePreview: null,
    isSuccess: null,
    product: [],
    products: [],
    categories: false,
    dropdownText: "Categories"
};

const productReducer = (state = INITIAL_PRODUCT_STATE, action) => {

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

        case 'PRODUCT_SET_CATEGORY':
            return {
                ...state,
                category: action.category
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
            };
        
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.categories
            };

        case 'CHANGE_DROPDOWN_TEXT':
            return {
                ...state,
                dropdownText: action.text
            };

        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.product
            };

        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.products
            };
        
        default:
            return state;
    }
};

export default productReducer;