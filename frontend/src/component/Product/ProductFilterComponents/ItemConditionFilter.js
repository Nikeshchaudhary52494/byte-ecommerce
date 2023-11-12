import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const ItemConditionFilter = () => {
    const [itemCondition, setItemCondition] = useState('both');

    const handleChange = (event) => {
        setItemCondition(event.target.value);
    };
    return (
        <>


            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Item Condition:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={itemCondition}
                    onChange={handleChange}
                >
                    <FormControlLabel value="both" control={<Radio />} label="Both" />
                    <FormControlLabel value="new" control={<Radio />} label="New" />
                    <FormControlLabel value="rewnewed" control={<Radio />} label="Renewed" />
                </RadioGroup>
            </FormControl>

        </>
    )
}

export default ItemConditionFilter