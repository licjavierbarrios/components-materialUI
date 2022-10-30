import { useState } from "react";
import { Stack, Typography, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";

const MuiPicker = () => {
	const [selectDate, setSelectDate] = useState(null);
    const [selectTime, setSelectTime] = useState(null);
    const [selectDateTime, setSelectDateTime] = useState(null);
	console.log({selectDate});
	console.log({selectTime: selectTime && selectTime.toLocaleTimeString()});
	console.log({selectDateTime});

	return (
		<>
			<Stack spacing={3} p={5}>
				<Typography variant="h6" gutterBottom component="div">
					{" "}
					PARA USAR ==> INSTALAR:
				</Typography>
				<Typography variant="body2" gutterBottom component="div">
					{" "}
					yarn add @mui/x-date-pickers yarn add date-fns
				</Typography>
			</Stack>
			<Stack spacing={4} sx={{ width: "250px" }} p={5}>
				<DatePicker
					label="Date Picker"
					renderInput={(params) => <TextField {...params} />}
					value={selectDate}
					onChange={(newValue) => {
						setSelectDate(newValue);
					}}
				/>
			</Stack>
            <Stack spacing={4} sx={{ width: "250px" }} p={5}>
				<TimePicker
					label="Time Picker"
					renderInput={(params) => <TextField {...params} />}
					value={selectTime}
					onChange={(newValue) => {
						setSelectTime(newValue);
					}}
				/>
			</Stack>
            <Stack spacing={4} sx={{ width: "250px" }} p={5}>
				<DateTimePicker
					label="Date Time Picker"
					renderInput={(params) => <TextField {...params} />}
					value={selectDateTime}
					onChange={(newValue) => {
						setSelectDateTime(newValue);
					}}
				/>
			</Stack>
		</>
	);
};

export default MuiPicker;
