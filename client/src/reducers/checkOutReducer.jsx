const initState = { checkOutList: [] };

const checkOutReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log("add Item");
            return {
                ...state,
                checkOutList: [
                    ...state.checkOutList,
                    action.payload
                ]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                checkOutList: action.payload
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
                checkOutList: action.payload
            }
        case 'CLEAN_ITEM':
            return {
                checkOutList: []
            }
        default:
            return state
    }
}

export default checkOutReducer;