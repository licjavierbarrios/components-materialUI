import { useState } from "react";
import {
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { FormatBold, FormatItalic, FormatUnderlined, Send } from "@mui/icons-material";

const MuiButton = () => {
	const [formats, setFormats] = useState([]);
	// PARA USAR EN MODO EXCLUSIVO
	// const [formats, setFormats] = useState(null);

	console.log("formats", formats);
	const handleFormatChange = (event, newFormats) => {
		setFormats(newFormats);
	};

	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://google.com">
					Text
				</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="contained" color="secondary">
					Secondary
				</Button>
				<Button variant="contained" color="error">
					Error
				</Button>
				<Button variant="contained" color="info">
					Info
				</Button>
				<Button variant="contained" color="success">
					Success
				</Button>
				<Button variant="contained" color="warning">
					Warning
				</Button>
			</Stack>
			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" size="small">
					Small
				</Button>
				<Button variant="contained" size="medium">
					Medium
				</Button>
				<Button variant="contained" size="large">
					Large
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" startIcon={<Send />}>
					Send
				</Button>
				<Button variant="contained" endIcon={<Send />}>
					Send
				</Button>
				<IconButton aria-label="send" color="success" size="small">
					<Send />
				</IconButton>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button variant="contained" disableElevation onClick={() => alert("Clicked")}>
					disableElevation
				</Button>
				<Button variant="contained" disableRipple>
					Disable Ripple
				</Button>
			</Stack>
			<Typography variant="h4"> Botton Group</Typography>
			<Stack direction="row">
				<ButtonGroup variant="contained">
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>

			<Stack direction="row">
				<ButtonGroup
					variant="contained"
					orientation="vertical"
					size="samll"
					color="secondary"
					aria-label="alignament button group"
				>
					<Button onClick={() => alert("Left clicked")}>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
			<Typography variant="h4"> Toggle Botton Group</Typography>
			<Stack direction="row">
				<ToggleButtonGroup
					aria-label="text formatting"
					value={formats}
					onChange={handleFormatChange}
					size="small"
					color="secondary"
					orientation="vertical"
					// exclusive = SOLO SE PUEDE ELEGIR UNA OPCION
					// exclusive
				>
					<ToggleButton value="bold" aria-label="bold">
						<FormatBold />
					</ToggleButton>
					<ToggleButton value="italic" aria-label="italic">
						<FormatItalic />
					</ToggleButton>
					<ToggleButton value="underlined" aria-label="underlined">
						<FormatUnderlined />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
