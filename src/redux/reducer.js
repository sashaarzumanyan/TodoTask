const initialState=[
    {
        id: Math.random(),
        title: 'learn Python',
        description: 'Lorem Ipsum dolor',
        status: 'Todo',
        priority: 'Low'
    },
    {
        id: Math.random(),
        title: 'learn C++',
        description: 'Lorem Ipsum dolor',
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
                ...state,
                action.payload
            ]

        default:
            return state
    }
}
export default todoReducer 