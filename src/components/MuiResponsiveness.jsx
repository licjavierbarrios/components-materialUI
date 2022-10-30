import { Box, Stack } from "@mui/material";
import {styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({
    height: '250px',
    width: '250px',
    backgroundColor: theme.palette.secondary.main,
}));


const MuiResponsiveness = () => {
	return (
        <>
            <Stack>

                <Box
                    sx={{
                        height: "300px",
                        width: {
                            xs: 100, // 0-600px
                            sm: 200, // 600-900px
                            md: 300, // 900-1200px
                            lg: 400, // 1200-1800px
                            xl: 500, // 1800px+
                        },
                        bgcolor: "secondary.dark",
                    }}
                    m={6}
                ></Box>
                <StyledBox  />
            </Stack>
        </>
	);
};

export default MuiResponsiveness;
