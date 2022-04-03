import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoCard from '../Components/TodoCard'
import { deleteTask, editTask, setOpen } from '../redux/actions'

const TodoList = () => {
    const {todoList} = useSelector(state => state)
    const dispatch = useDispatch()
    
    const handleEdit = (value) => {
        dispatch(setOpen({}))
        dispatch(editTask({ ...value}))
    }
    const handleDelete = (id) =>{
        dispatch(deleteTask(id))
    }
    return (
        <Card sx={{ bgcolor: 'text.disabled', position: 'relative', top: '20%' }} >
            <Typography
                variant='h4'
                sx={{ m: 2 }}
            >To Do</Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }} >
                <Grid item xs={11}>
                    {todoList.map((todos) => {
                        if (todos.status === 'Todo') {
                            return <TodoCard
                                key={todos.id}
                                title={todos.title}
                                description={todos.description}
                                priority={todos.priority}
                                handleEdit={()=> handleEdit(todos)}
                                handleDelete={()=>handleDelete(todos.id)}
                            />
                        }else{
                            <Typography>List is Empaty</Typography>
                        }
                    }                        
                    )}
                </Grid>
            </Grid>
        </Card>
    )
}

export default TodoList