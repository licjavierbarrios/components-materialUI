import { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
	const [value, setValue] = useState("");
	return (
		<Stack spacing={4}>
			<Stack direction={"row"} spacing={2}>
				<TextField label="Name" variant="outlined" />
				<TextField label="Name" variant="filled" />
				<TextField label="Name" variant="standard" />
			</Stack>
			<Stack spacing={4} direction="row">
				<TextField label="Small secondary" size="small" color="secondary" />
			</Stack>
			<Stack spacing={4} direction="row">
				<TextField label="Form Input" required />
				<TextField label="Form Input" helperText="Input a text" />
			</Stack>
			<Stack spacing={4} direction="row">
				<TextField
					label="Password"
					disabled
					type="password"
					helperText="Do not share your password with anyone"
				/>
				<TextField label="Read only" InputProps={{ readOnly: true }} />
			</Stack>

			<Stack spacing={4} direction="row">
				<TextField
					label="Error"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					error={!value}
					helperText={!value ? "Required" : "Do not share your password with anyone"}
				/>
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField
					label="Amount"
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					}}
				/>
				<TextField
					label="Weight"
					InputProps={{
						endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
