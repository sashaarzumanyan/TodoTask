export const configReducer = (state=false, action) => {
    switch (action.type) {
        case "SET_OPEN":
            return  !state
        default:
            return state;
    }
}