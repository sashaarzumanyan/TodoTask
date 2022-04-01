import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react'
import ModalWindow from './ModalWindow';

const TodoCard = ({ title, description, priority, status }) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <Stack direction='row' spacing={2}>
                    <Chip label={title} color="primary" size="small" />
                    <Chip label={priority} color="secondary" size="small" />
                    <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        size='small'
                        sx={{ position: 'relative', left: '55px' }}
                        onClick={() => setOpen(!open)}
                    >
                        Edit
                    </Button>
                </Stack>
                <Accordion sx={{ mt: 2 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Chip label='Description' color="warning" size="small" />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
            <ModalWindow 
                open={open}
                close={handleClose}
                title={title}
                description={description}
                editStatus={status}
                editPriority={priority}
            />
        </Card>
    )
}

export default TodoCard