import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Card,
    CardContent,
    Chip,
    Grid,
    Stack,
    Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoCard = ({ title, description, priority, handleEdit, handleDelete }) => {

    return (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <Grid container display={"flex"} justifyContent={"center"}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Chip label={title} color="primary" size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Chip label={priority} color="secondary" size="small" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Button
                            variant="contained"
                            startIcon={<EditIcon />}
                            size='small'
                            sx={{ borderRadius: 8 }}
                            onClick={handleEdit}
                        >
                            Edit
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
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
                    </Grid>
                </Grid>
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