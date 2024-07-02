import { Box, Typography, Button, Link } from "@mui/material";
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
        // target="_blank"
        // href={companySite}
        sx={{
          // borderRadius: "0px",
          // display: "block",
          // textTransform: "none",
          width: "100%",
          border: "2px solid black",
          boxShadow: "6px 6px 1px rgba(102, 204, 255, 1)",
          p: "20px",
          px: "25px",
          mx: "10px",
          // color: "black",
          // justifyContent: "left",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: "Berlin sans", fontSize: "1.6rem" }}>
            {jobTitle}
          </Typography>
        </Box>
        <Box>
          <Link
            target="_blank"
            href={companySite}
            sx={{
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "1.1rem",
                color: "black",
              }}
            >
              {company}
            </Typography>
          </Link>
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
              fontSize: "0.9rem",
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
