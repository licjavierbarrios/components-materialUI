import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const MuiSkeleton = () => {
	const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

	return (
		<>
			<Stack p={5} spacing={1} width="250px">
				<Skeleton variant="text" />
				<Skeleton variant="text" animation="wave" />
				<Skeleton variant="text" animation={false} />

				<Skeleton variant="circular" width={40} height={40} />
				<Skeleton variant="rectaguntar" width={250} height={125} />
			</Stack>
            <Typography p={5} variant="h6" gutterBottom component="div">Loading</Typography>
            <Box sx={{ width: '250px' }} p={5} >
                {
                    loading ? (
                        <Skeleton variant="rectangular" width={256} height={144} animation='wave' />
                    ) : (
                        <img
                            src="https://source.unsplash.com/random/255x144" 
                            alt="random"
                            width={256}
                            height={144}

                        />
                    )
                }
            </Box>
            <Stack
                direction="row"
                spacing={1}
                sx={{ width: '100%', marginTop: '12px' }}
            >
                {
                    loading ? (
                        <Skeleton
                            variant="circular"
                            width={40}
                            height={40}
                            animation="wave"
                        />
                    ) : (
                        <Avatar>V</Avatar>
                    )
                }
            </Stack>
            <Stack
                sx={{ width: '80%'}}>
                {
                    loading ? (
                        <>
                            <Typography variant='body1'>
                                <Skeleton variant='text' width='100%' animation="wave" />
                            </Typography>
                            <Typography variant='body2'>
                                <Skeleton variant='text' width='100%' animation="wave" />
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant='body1'>React MUI Tutorial</Typography>

                        </>
                    )
                }
                </Stack>


        </>
	);
};

export default MuiSkeleton;
