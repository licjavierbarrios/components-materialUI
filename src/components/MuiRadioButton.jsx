import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
    const [value, setValue] = useState("")
    console.log(value)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
	return (
		<Box>
			<FormControl error>
				<FormLabel id="job-experience-group-label">Years of experience</FormLabel>
				<RadioGroup
					name="job-experience-group"
					aria-labelledby="job-experience-group-label"
                    value={value}
                    onChange={handleChange}
                    row
                    
				>
                    <FormControlLabel control={<Radio size="small" color="secondary" />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio size="large" color="success" />} label='6-10' value='6-10' />
                </RadioGroup>
                <FormHelperText>Required</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;
