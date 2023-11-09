import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Form() {
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </div>

    )
}

export default Form
