const initState = { user: null };

const userStateReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN':
            console.log("add Item");
            return {
                user: action.payload
            }
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SIGNOUT':
            return {
                user: null
            }
        default:
            return state
    }
}

export default userStateReducer;