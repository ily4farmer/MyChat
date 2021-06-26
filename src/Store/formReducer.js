



const defaultState = {
    email: {
        emailValue: '',
        type: 'email',
        label: 'Введите email'
    },
    password: {
        passwordValue: '',
        type: 'password',
        label: 'Введите password'
    }
}

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'state':
            return {...state, ...action.payload};   
        default:
            return state;
    }
}