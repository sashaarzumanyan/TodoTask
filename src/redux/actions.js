export const addTaskAction =(task)=>{
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const setOpen =()=>{
    return {
        type: "SET_OPEN"
    }
}

export const editTask = (value) =>{
    return {
        type: "EDIT_TASK",
        payload: value
    }
}


export const clearTaskFields = () =>{
    return {
        type: "CLEAR_TASK_FIELDS",
    }
}


export const deleteTask = (id) =>{
    return {
        type: "DELETE_TASK",
        payload: id
    }
}