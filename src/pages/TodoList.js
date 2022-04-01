import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from '../Components/TodoCard'

const TodoList = () => {
    const todoList = useSelector(state => state)
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
                                id={todos.id}
                                key={todos.id}
                                title={todos.title}
                                description={todos.description}
                                status={todos.status}
                                priority={todos.priority}
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