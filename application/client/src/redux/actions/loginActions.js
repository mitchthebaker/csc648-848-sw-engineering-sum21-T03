import axios from 'axios';

export const setUsername = (username) => ({
    type: 'USER_SET_USERNAME',
    username
});

export const setPassword = (password) => ({
    type: 'USER_SET_PASSWORD',
    password
});

export const loginUser = () => {
    return (dispatch, getState) => {
        const userData = {
            "username": getState().registerReducer.username,
            "password": getState().registerReducer.password,
        };

        console.log(userData);

        axios.post('/api/login', userData, {
            "headers": {
                "content-type":"application/json",
            },
        })
            .then((res) => {
                console.log(res);
                if(res.status === 201) {
                    dispatch(setUserId(res.data.user_id));
                    dispatch(redirectUserAfterLogin(true));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};  

export const redirectUserAfterLogin = (loggedIn) => ({
    type: "USER_IS_LOGGEDIN",
    loggedIn
});

export const setUserId = (user_id) => ({
    type: "USER_SET_ID",
    user_id
});