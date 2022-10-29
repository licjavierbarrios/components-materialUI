import { useState } from "react";
import { Face } from "@mui/icons-material";
import { Stack, Chip, Avatar } from "@mui/material";

const MuiChip = () => {
	const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

	const handleDelete = (chipToDelete) => {
		setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
	};
	return (
		<Stack m={4} direction="column" spacing={1}>
			<Stack m={4} direction="row" spacing={1}>
				<Chip label="Chip" color="primary" size="small" />
				<Chip label="Chip" color="primary" size="small" icon={<Face />} />
				<Chip label="Chip outlined" variant="outlined" color="secondary" size="small" />
				<Chip
					label="Chip outlined"
					variant="outlined"
					color="secondary"
					size="small"
					avatar={<Avatar>V</Avatar>}
				/>
			</Stack>
			<Stack m={4} direction="row" spacing={1}>
				<Chip label="Click" color="success" onClick={() => alert("Clicked")} />
				<Chip
					label="Delete"
					color="error"
					onClick={() => alert("Clicked")}
					onDelete={() => alert("Delete handler called")}
				/>
			</Stack>
			<Stack direction="row" spacing={2} p={5}>
				{chips.map((chip) => (
					<Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
				))}
			</Stack>
		</Stack>
	);
};

export default MuiChip;
