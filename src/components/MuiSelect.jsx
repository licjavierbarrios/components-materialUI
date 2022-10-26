import { useState } from "react";
import { Box, MenuItem, TextField, Typography } from "@mui/material";

const MuiSelect = () => {
	const [country, setCountry] = useState("");
	const [countries, setCountries] = useState([]);
	const handleChange = (e) => {
		setCountry(e.target.value);
	};
	console.log({ country });

	const handleChangeMultiple = (e) => {
		const value = e.target.value;
		setCountries(value === "string" ? value.split(",") : value);
	};
	console.log({ countries });

	return (
		<>
			<Typography variant="h5" component="h1" gutterBottom>
				Select with one value
			</Typography>
			<Box width="250px">
				<TextField label="Select country" onChange={handleChange} select value={country} fullWidth>
					<MenuItem value="IN">India</MenuItem>
					<MenuItem value="USA">United States</MenuItem>
					<MenuItem value="UK">United Kingdom</MenuItem>
				</TextField>
			</Box>
			<br />
			<br />
			<br />
			<Typography variant="h5" component="h1" gutterBottom>
				Select with multiple value
			</Typography>

			<Box width="250px">
				<TextField
					label="Select country"
					SelectProps={{ multiple: true }}
					onChange={handleChangeMultiple}
					select
					value={countries}
					fullWidth
					size="small"
					color="secondary"
					helperText="Please select your countries"
					error
				>
					<MenuItem value="IN">India</MenuItem>
					<MenuItem value="USA">United States</MenuItem>
					<MenuItem value="UK">United Kingdom</MenuItem>
				</TextField>
			</Box>
		</>
	);
};

export default MuiSelect;
