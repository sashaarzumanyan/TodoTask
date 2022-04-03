export const editTodo= (state={},action)=>{
    switch (action.type) {
        case "EDIT_TASK":
            return  action.payload
            
        case "CLEAR_TASK_FIELDS":
            return {}
        default:
            return state;
    }
}