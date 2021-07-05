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

export const createProduct = () => {
    return(dispatch, getState) => {
        const productData = {
            title: getState().productReducer.title,
            description: getState().productReducer.description,
            price: getState().productReducer.price,
            file: getState().productReducer.file,
        };

        console.log(productData);

        const formData = new FormData();
        formData.append('title', productData.title);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('file', productData.file);

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
        })
    };
};