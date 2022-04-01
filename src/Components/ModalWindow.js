import React, { useState } from 'react'
import {
    Box,
    Button,
    FormControl,
    MenuItem,
    Modal,
    TextField,
    Typography
} from '@mui/material'
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../redux/actions';
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

const ModalWindow = ({ open, close, title, description, editStatus, editPriority }) => {
    const { register, handleSubmit, watch, reset } = useForm()
    const dispatch = useDispatch()
    const [status, setStatus] = useState(editStatus)
    const [priority, setPriority] = useState('')


    const handleChangeStatus = (event) => {
        setStatus(event.target.value)
    }

    const handleChangePriority = (event) => {
        setPriority(event.target.value)
    }

    const addTask = (data) => {
        dispatch(addTaskAction({
            id: Math.random(),
            ...data,
            status: status,
            priority: priority
        }))
        reset({title: '',description: ''})
    }

    return (
        <Modal
            open={open}
            onClose={close}
        >
            <Box sx={modalStyle}>
                <FormControl>
                    <Typography variant='h4'>Add Task</Typography>
                    <TextField
                        margin="normal" label="Title"
                        {...register("title", { required: true })}
                        value={title}
                    />
                    <TextField
                        margin="normal" label="Description"
                        {...register("description")}
                        value={description}
                    />
                    {/* setStatus */}
                    <TextField
                        margin="normal"
                        select
                        label="Status"
                        value={editStatus}
                        onChange={handleChangeStatus}
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
                        value={editPriority}
                        onChange={handleChangePriority}
                    >
                        {todoPriority.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button variant="contained" color="success" onClick={handleSubmit(addTask)}>Add</Button>
                    <Button variant="contained" color="error" onClick={close}>Close</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalWindow