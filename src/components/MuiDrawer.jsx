import { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

const MuiDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				arial-label="logo"
				onClick={() => setIsDrawerOpen(true)}
			>
				<Menu />
			</IconButton>
			<Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
				<Box p={2} width="250px" textAlign="center" role="presentation">
					<Typography variant="h6" component="div">
						Side Panel
					</Typography>
				</Box>
			</Drawer>
		</>
	);
};

export default MuiDrawer;
