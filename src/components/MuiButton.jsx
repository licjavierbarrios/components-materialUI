import { Button, IconButton, Stack } from "@mui/material";
import { Send } from "@mui/icons-material";

const MuiButton = () => {
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
		</Stack>
	);
};

export default MuiButton;
