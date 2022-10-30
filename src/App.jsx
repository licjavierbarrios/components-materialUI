import React from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiResponsiveness from "./components/MuiResponsiveness";

// import MuiPicker from "./components/MuiPicker";
// import MuiTabs from "./components/MuiTabs";
// import MuiLoadingButton from "./components/MuiLoadingButton";
// import MuiSkeleton from "./components/MuiSkeleton";
// import MuiTable from "./components/MuiTable";
// import MuiDialog from "./components/MuiDialog";
// import MuiSnackbars from "./components/MuiSnackbars";
// import MuiChip from "./components/MuiChip";
// import MuiBadge from "./components/MuiBadge";
// import MuiList from "./components/MuiList";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBottomNavigation from "./components/MuiBottomNavigation";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
// import MuiLink from "./components/MuiLink";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiImageList from "./components/MuiImageList";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiCard from "./components/MuiCard";
// import MuiLayout from "./components/MuiLayout";
// import MuiAutocomplete from "./components/MuiAutocomplete";
// import MuiRating from "./components/MuiRating";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiCheckBox from "./components/MuiCheckBox";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiSelect from "./components/MuiSelect";
// import MuiTextField from "./components/MuiTextField";
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";

const theme= createTheme({
	status: {
		danger: '#e53e3e',
	},
	palette: {
		secondary: {
			main: colors.orange[500],
		},
	},	
})

const App = () => {
	return (
		<div>
			{/* <MuiTypography /> */}
			{/* <MuiButton /> */}
			{/* <MuiTextField /> */}
			{/* <MuiSelect /> */}
			{/* <MuiRadioButton /> */}
			{/* <MuiCheckBox /> */}
			{/* <MuiSwitch /> */}
			{/* <MuiRating /> */}
			{/* <MuiAutocomplete /> */}
			{/* <MuiLayout /> */}
			{/* <MuiCard /> */}
			{/* <MuiAccordion /> */}
			{/* <MuiImageList /> */}
			{/* <MuiNavbar /> */}
			{/* <MuiLink /> */}
			{/* <MuiBreadcrumbs /> */}
			{/* <MuiDrawer /> */}
			{/* <MuiSpeedDial /> */}
			{/* <MuiBottomNavigation /> */}
			{/* <MuiAvatar /> */}
			{/* <MuiBadge /> */}
			{/* <MuiList /> */}
			{/* <MuiChip /> */}
			{/* <MuiSnackbars /> */}
			{/* <MuiDialog /> */}
			{/* <MuiTable /> */}
			{/* <MuiSkeleton /> */}
			{/* <MuiLoadingButton /> */}
			{/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
			{/* <MuiPicker /> */}
			{/* <MuiTabs /> */}
			{/* </LocalizationProvider> */}
			<ThemeProvider theme={theme}>
				<MuiResponsiveness />
			</ThemeProvider>
		</div>
	);
};

export default App;
