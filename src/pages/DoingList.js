import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import TodoCard from '../Components/TodoCard'

const DoingList = () => {
    const todoList = useSelector(state => state)
    return (
        <Card sx={{ bgcolor: 'text.disabled', position: 'relative', top: '20%' }} >
            <Typography
                variant='h4'
                sx={{ m: 2 }}
            >Doing</Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }} >
                <Grid item xs={11}>
                    {todoList.map((todos) => {
                        if (todos.status === 'Doing') {
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

export default DoingList