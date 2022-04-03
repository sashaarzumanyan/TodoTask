import React, { useEffect, useState } from 'react'
import {
    Alert,
    Box,
    Button,
    FormControl,
    MenuItem,
    Modal,
    Snackbar,
    TextField,
    Typography
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction, clearTaskFields, setOpen } from '../redux/actions';
import { useForm } from "react-hook-form";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
};

const todoStatus = ['Todo', 'Doing', 'Done'];
const todoPriority = ['Low', 'Medium', 'High'];

const ModalWindow = () => {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const { config, editTodo, todoList } = useSelector(state => state)
    const dispatch = useDispatch()
    const { title, description, priority, status } = editTodo
    useEffect(() => {
        reset({ title: `${title ? title : ""}`, description: `${description ? description : ''}` })
        setSuccess(false)
    }, [editTodo,reset,description,title])
    const handleClose = () => {
        dispatch(setOpen())
        dispatch(clearTaskFields())
        reset({ title: '', description: '' })
        setError(false)
    }

    const addTask = (data) => {
        const editArray = todoList.filter(e => e.id !== editTodo.id)
        editArray.push({ id: Math.random(), ...data })
        if (data.title !== editTodo.title || data.status !== editTodo.status) {
            dispatch(addTaskAction(editArray))
            dispatch(setOpen())
            setSuccess(true)
        } else {
            setError(true)
        }
        console.log(data);
    }
    return (
        <>
            <Modal
                open={config}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <FormControl>
                        <Typography variant='h4'>Add Task</Typography>
                        <TextField
                            margin="normal" label="Title"
                            {...register("title", { required: true })}
                            defaultValue={title}
                        />
                        <TextField
                            margin="normal" label="Description"
                            {...register("description", { required: true })}
                            defaultValue={description}
                        />
                        {/* setStatus */}
                        <TextField
                            margin="normal"
                            select
                            label="Status"
                            defaultValue={status}
                            {...register("status", { required: true })}
                        >
                            {todoStatus.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/* setPriority */}
                        <TextField
                            margin="normal"
                            select
                            label="Priority"
                            defaultValue={priority}
                            {...register("priority", { required: true })}
                        >
                            {todoPriority.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button variant="contained" color="success" onClick={handleSubmit(addTask)}>{editTodo.id ? "EDIT" : "Add"}</Button>
                        <Button variant="contained" color="error" onClick={handleClose}>Close</Button>
                    </Box>
                </Box>

            </Modal>
            {error ?
                <Snackbar
                    open={error}
                    autoHideDuration={200}
                >
                    <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
                        Please edit task
                    </Alert>
                </Snackbar> : null
            }
            {success ?
                <Snackbar
                    open={success}
                    autoHideDuration={200}
                >
                    <Alert variant="filled" severity="success" sx={{ width: '100%' }}>
                        Task added success
                    </Alert>
                </Snackbar> : null
            }
        </>
    )
}

export default ModalWindow