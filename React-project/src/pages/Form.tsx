import React from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import RowRadioButtonsGroup from '../components/RowRadioButtonsGroup';
import ResponsiveAppBar from '../components/ResponsiveAppBar';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Form() {
    
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <br />
            <hr />

            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />

            <br />
            <hr />
            {/* import radiogroup components */}
            <RowRadioButtonsGroup/>

            <br />
            <hr />
            <ResponsiveAppBar/>
        </div>

    )
}

export default Form
