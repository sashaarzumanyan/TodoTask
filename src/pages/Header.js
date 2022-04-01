import React, { useState } from 'react'
import { AppBar, Button, MenuItem, Modal, TextField, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import ModalWindow from '../Components/ModalWindow';



const Header = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Button variant='contained' onClick={handleOpen}>
                        Add Task
                    </Button>
                </Toolbar>
            </AppBar>
            <ModalWindow open={open} close={handleClose} />
        </>
    )
}

export default Header