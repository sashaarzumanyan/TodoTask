import React from 'react'
import { AppBar, Button, Toolbar, } from '@mui/material'
import { useDispatch } from 'react-redux'
import { clearTaskFields, setOpen } from '../redux/actions';



const Header = () => {
    
    const dispatch = useDispatch()
    const handleOpen = () => {
        dispatch(setOpen())
        dispatch(clearTaskFields())
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
        </>
    )
}

export default Header