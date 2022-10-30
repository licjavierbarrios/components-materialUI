import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

const MuiLoadingButton = () => {
	return (
		<>
			<Stack p={5} spacing={2} direction="column">
				<Typography variant="h4"> Antes de usar se debe instalar </Typography>
				<Typography variant="h5"> yarn add @mui/lab </Typography>
			</Stack>
			<Stack spacing={2} direction="column" width={150} p={5}>
				<LoadingButton variant="outlined">Submit</LoadingButton>
				<LoadingButton loading variant="outlined">Submit</LoadingButton>
				<LoadingButton loading variant="outlined" loadingIndicator='Loading...' >Fetch data</LoadingButton>
                <LoadingButton
                    variant="outlined"
                    loadingPosition="start"
                    startIcon={<Save  />}
                >
                    Save
                </LoadingButton>
                <LoadingButton
                    loading
                    variant="outlined"
                    loadingPosition="start"
                    startIcon={<Save  />}
                >
                    Save
                </LoadingButton>
			</Stack>
		</>
	);
};

export default MuiLoadingButton;
