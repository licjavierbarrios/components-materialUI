import React, { useState, forwardRef } from "react";
import { Button, Snackbar, Alert } from "@mui/material";

const SnackbarAlert = forwardRef((props, ref) => {
    return <Alert elevation={6} ref={ref} {...props} />;
});
const MuiSnackbars = () => {
	const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
	return (
		<>
			<Button onClick={() => setOpen(true)}>Submit</Button>
			{/* <Snackbar
				message="Form submitted successfully!"
				autoHideDuration={4000}
				open={open}
				onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			/> */}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <SnackbarAlert 
                    onClose={handleClose}
                    severity="success"
                >
                    Form submitted successfully!
                </SnackbarAlert>
            </Snackbar>

		</>
	);
};

export default MuiSnackbars;
