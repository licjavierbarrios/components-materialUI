import { ContentCopy, Edit, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";

const MuiSpeedDial = () => {
	return (

        <>
            <Typography variant="h4" gutterBottom component="div">
                Seep Dial Component 
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                Usado generalmente para navegación móvil
            </Typography>
            <SpeedDial
                ariaLabel="Navigation speed dial"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon= {<SpeedDialIcon  openIcon={<Edit />} />}
            >
                <SpeedDialAction icon={<ContentCopy />} tooltipTitle="Copy" tooltipOpen  />
                <SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
                <SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />

                
            </SpeedDial>
        </>
	);
};

export default MuiSpeedDial;
