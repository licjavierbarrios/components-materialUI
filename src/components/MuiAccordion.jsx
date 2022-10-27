import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React, { useState } from "react";

const MuiAccordion = () => {
	const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false);
    };
    console.log(expanded);
	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
                
			>
				<AccordionSummary id="panel1" aria-controls="panel1-content" expandIcon={<ExpandMore />}>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur delectus nobis
						amet ea dolorem quidem deserunt, voluptas cumque provident possimus voluptate eveniet
						esse expedita perferendis quasi! Expedita, iusto odio?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
			>
				<AccordionSummary id="panel2" aria-controls="panel2-content" expandIcon={<ExpandMore />}>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur delectus nobis
						amet ea dolorem quidem deserunt, voluptas cumque provident possimus voluptate eveniet
						esse expedita perferendis quasi! Expedita, iusto odio?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
			>
				<AccordionSummary id="panel3" aria-controls="panel3-content" expandIcon={<ExpandMore />}>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur delectus nobis
						amet ea dolorem quidem deserunt, voluptas cumque provident possimus voluptate eveniet
						esse expedita perferendis quasi! Expedita, iusto odio?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default MuiAccordion;
