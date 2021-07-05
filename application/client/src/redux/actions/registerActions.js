export const setUsername = (username) => ({
    type: 'USER_SET_USERNAME',
    username
});

export const setPassword = (password) => ({
    type: 'USER_SET_PASSWORD',
    password
});

export const setConfirmPassword = (confirmPassword) => ({
    type: 'USER_SET_CONFIRM_PASSWORD',
    confirmPassword
});