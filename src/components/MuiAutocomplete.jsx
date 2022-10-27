import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
	id: index + 1,
	label: skill,
}));

const MuiAutocomplete = () => {
	const [value, setValue] = useState(null);
    const [skill, setSkill] = useState(null);
	console.log({ skill });
	return (
		<Stack spacing={2} width="250px">
			<Autocomplete
				options={skills}
				renderInput={(params) => <TextField {...params} label="Skills" />}
				value={value}
				onChange={(e, newValue) => setValue(newValue)}
				// Agregar un valor que no existe en el arreglo
				// freeSolo
			/>
            <Autocomplete
				options={skillsOptions}
				renderInput={(params) => <TextField {...params} label="Skills" />}
				value={skill}
				onChange={(e, newValue) => setSkill(newValue)}
				
			/>
		</Stack>
	);
};

export default MuiAutocomplete;
