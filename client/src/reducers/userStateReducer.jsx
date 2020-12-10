const initState = { user: {
    auth: false
} };

const userStateReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN':
            console.log("add Item");
            return {
                user: {
                    ...action.payload,
                    auth: true
                }
            }
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SIGNOUT':
            return {
                user: {
                    auth: false
                }
            }
        default:
            return state
    }
}

export default userStateReducer;