import { useState } from "react";
import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const MuiBottomNavigation = () => {
	const [value, setValue] = useState(0);
	return (
		<BottomNavigation
			sx={{ width: "100%", position: "absolute", bottom: 0 }}
			value={value}
			onChange={(e, newValue) => {
				setValue(newValue);
			}}
            showLabels
		>
			<BottomNavigationAction label="Home" icon={<Home />} />
			<BottomNavigationAction label="Favorites" icon={<Favorite />} />
			<BottomNavigationAction label="Profile" icon={<Person />} />
		</BottomNavigation>
	);
};

export default MuiBottomNavigation;
