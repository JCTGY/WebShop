const initState = { user: {
    auth: false,
    shippingInfo: {}
} };

const userStateReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP':
        return {
            ...state,
            user: {
                ...action.payload,
                shippingInfo: {},
                auth: true
            }
        }
        case 'SIGNIN':
            return {
                ...state,
                user: {
                    ...action.payload,
                    auth: true
                }
            }
        case 'UPDATE_USER':
            return {
                ...state,
                user:  {
                    ...action.payload,
                    auth: true
                }
            }
        case 'SIGNOUT':
            return {
                user: {
                    auth: false
                }
            }
        case 'UPDATE_SHIPPINGINFO':
            return {
                ...state,
                user: {
                    ...state.user,
                    shippingInfo: action.payload,
                    auth: true
                }
            }
        default:
            return state
    }
}

export default userStateReducer;