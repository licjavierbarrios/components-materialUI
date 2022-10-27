import { useState } from "react";
import { Box, FormControlLabel, Checkbox, Typography, FormControl, FormGroup, FormLabel, FormHelperText } from "@mui/material";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

const MuiCheckBox = () => {
	const [acceptT, setAcceptT] = useState(false);

	const [skills, setSkills] = useState([]);

	const handleChange = (event) => {
		setAcceptT(event.target.checked);
	};

	const handleSkillChange = (event) => {
		const index = skills.indexOf(event.target.value);
		if (index === -1) {
			setSkills([...skills, event.target.value]);
		} else {
			setSkills(skills.filter((skill) => skill !== event.target.value));
		}
	};

	console.log(skills);

	return (
		<Box>
			<Typography variant="h4" component="div" gutterBottom>
				Checkbox
			</Typography>
			<Box>
				<FormControlLabel
					label="I acept the terms and conditions"
					control={<Checkbox checked={acceptT} onChange={handleChange} size="small" color="secondary" />}
				/>
			</Box>
			<Checkbox
				icon={<BookmarkBorder />}
				checkedIcon={<Bookmark />}
				checked={acceptT}
				onChange={handleChange}
			/>
			<br />
			<br />
			<br />
			<Typography variant="h4" component="div" gutterBottom>
				Checkbox Group
			</Typography>

			<FormControl error>
				<FormLabel>Skills</FormLabel>
				<FormGroup row>
					<FormControlLabel
						label="HTML"
						value="html"
						control={<Checkbox checked={skills.includes("html")} onChange={handleSkillChange} />}
					/>
					<FormControlLabel
						label="CSS"
						value="css"
						control={<Checkbox checked={skills.includes("css")} onChange={handleSkillChange} />}
					/>
					<FormControlLabel
						label="JavaScript"
						value="javascript"
						control={
							<Checkbox checked={skills.includes("javascript")} onChange={handleSkillChange} />
						}
					/>
				</FormGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default MuiCheckBox;
