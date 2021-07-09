import axios from 'axios';

export const setTitle = (title) => ({
    type: 'PRODUCT_SET_TITLE',
    title
});

export const setDescription = (description) => ({
    type: 'PRODUCT_SET_DESCRIPTION',
    description
});

export const setPrice = (price) => ({
    type: 'PRODUCT_SET_PRICE',
    price
});

export const setImage = (image) => ({
    type: 'PRODUCT_SET_IMAGE',
    image
});

export const setSuccess = (isSuccess) => ({
    type: 'PRODUCT_SET_SUCCESS',
    isSuccess
});

// Used to update state of 'category' in the ProductCreationForm 
export const setCategory = (category) => ({
    type: 'PRODUCT_SET_CATEGORY',
    category
});

// For displaying the categories dropdown menu
export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    categories
});

export const changeDropdownText = (text) => ({
    type: 'CHANGE_DROPDOWN_TEXT',
    text
});

export const createProduct = () => {
    return(dispatch, getState) => {

        const formData = new FormData();
        formData.append('title', getState().productReducer.title);
        formData.append('description', getState().productReducer.description);
        formData.append('price', getState().productReducer.price);
        formData.append('category', getState().productReducer.category);
        formData.append('file', getState().productReducer.file);

        console.log(formData);

        axios.post('/api/upload-product', formData, {
            headers: { "Content-Type": "multipart/form-data"}
        })
        .then(res => {
            console.warn(res);
            if(res.status === 201) {
                dispatch(setSuccess("Product uploaded successfully"));
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };
};

export const getProducts = (products) => ({
    type: 'GET_PRODUCTS',
    products
});