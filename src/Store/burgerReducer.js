





const defaultState = {
    visible: false
}

export const burgerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'state':
            return {...state, visible: action.payload};   
        default:
            return state;
    }
}