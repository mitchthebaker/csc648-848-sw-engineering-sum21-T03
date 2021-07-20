import axios from 'axios';

export const updateFirstName = (firstName) => ({
    type: 'USER_UPDATE_FIRSTNAME',
    firstName
});

export const updateLastName = (lastName) => ({
    type: 'USER_UPDATE_LASTNAME',
    lastName
});

export const updateAccount = () => {
    return (dispatch, getState) => {

        const sellerData = {
            firstName: getState().sellerSettingsReducer.firstName,
            lastName: getState().sellerSettingsReducer.lastName,
        };

        console.log(sellerData);

        axios.put(`/api/users/${getState().loginReducer.user_id}`, sellerData)
            .then((res) => {
                console.log(res);
                /*if(res.status === 201) {
                    dispatch(redirectUser(true));
                }*/

            })
            .catch((err) => {
                console.log(err);
            });
    };
}