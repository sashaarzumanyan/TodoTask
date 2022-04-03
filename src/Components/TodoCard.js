import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Card,
    CardContent,
    Chip,
    Stack,
    Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoCard = ({ title, description, priority, handleEdit,handleDelete }) => {

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
                        sx={{ borderRadius: 8 }}
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                    <Button
                        color='error'
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        size='small'
                        sx={{ borderRadius: 8 }}
                        onClick={handleDelete}
                    >
                        Delete
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
        </Card>
    )
}

export default TodoCard