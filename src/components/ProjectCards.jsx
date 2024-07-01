import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectCards = ({
  key,
  jobTitle,
  from,
  to,
  description,
  company,
  skills,
  companySite,
  location,
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          border: "2px solid black",
          boxShadow: "5px 5px 1px rgba(102, 204, 255, 1)",
          p: "20px",
          px: "25px",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: "Berlin sans", fontSize: "1.6rem" }}>
            {jobTitle}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}>
            {company}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            {from} - {to}
          </Typography>
          {/* <Typography>{to}</Typography> */}
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "light",
              fontSize: "1rem",
            }}
          >
            {description}
          </Typography>
        </Box>
        <br></br>
        <Box>
          <Typography sx={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            {skills}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCards;
