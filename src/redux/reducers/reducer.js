const initialState=[
    {
        id: Math.random(),
        title: 'learn Python',
        description: 'Lorem ',
        status: 'Todo',
        priority: 'Low'
    },
    {
        id: Math.random(),
        title: 'learn C++',
        description: 'Lorem Ipsum ',
        status: 'Doing',
        priority: 'Low'
    },
    {
        id: Math.random(),
        title: 'learn JavaScript',
        description: 'Lorem Ipsum dolor',
        status: 'Done',
        priority: 'Low'
    }
]

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...action.payload
            ]
        case "DELETE_TASK":
            const newArray = state.filter(e=> e.id !== action.payload)
            return newArray
        default:
            return state
    }
}
export default todoReducer 