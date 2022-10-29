import { Mail } from "@mui/icons-material";
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const MuiList = () => {
	return (
        <>
            <Box m={4} sx={{ width: "400px", bgcolor: "#efefef" }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Mail />
                            </ListItemIcon>

                            <ListItemText primary="List item 1" secondary='Secondary text' />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Mail />
                            </ListItemIcon>

                            <ListItemText primary="List item 1 - No disable Padding" secondary='Secondary text' />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <Mail />
                        </ListItemIcon>
                        <ListItemText primary="List item 2" secondary='Secondary text' />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <Mail />
                        </ListItemIcon>
                        <ListItemText primary="List item 3" secondary='Secondary text' />
                    </ListItem>
                </List>
            </Box>
            <Box m={4} sx={{ width: "400px", bgcolor: "#efefef" }}>
			<List>
				<ListItem>
					<ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary="List item 1" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary="List item 2" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary="List item 3" />
				</ListItem>
			</List>
		</Box>
        </>
	);
};

export default MuiList;
