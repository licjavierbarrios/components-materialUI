import { Link, Stack, Typography, Box } from "@mui/material";

const MuiLink = () => {
	return (
		<>
			<Stack spacing={2} direction="row" m={4}>
				<Link href="#">Link</Link>
				<Link href="#" variant="body2" >Link</Link>
				<Link href="#" color="secondary">
					Secondary
				</Link>
				<Link href="#" color="secondary" underline="hover">
					Underline hover
				</Link>
				<Link href="#" color="secondary" underline="none">
					Underline none
				</Link>
			</Stack>
			<Box m={4}>
				<Typography variant="h4">Typography Link</Typography>
				<Typography variant="h6">
					<Link href="#" color="secondary" underline="none">
						Link
					</Link>
				</Typography>

				<Typography variant="h4" component={Link} href="#">
					Typography Link
				</Typography>
			</Box>
		</>
	);
};

export default MuiLink;
