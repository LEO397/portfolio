import {
  CssBaseline,
  Paper,
  Typography,
  Box,
  Grid,
  Link,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import vrcurve from "../../assets/vrcurve.svg";
import linkedinlogo from "../../assets/linkedin-white-logo.svg";
import instagramlogo from "../../assets/instagram-white-logo.svg";
import "../css/curve.css";
import "../css/downarrow.css";
import SvgComponent from "../SvgComponent";
// import Navbar from "../Navbar";
import displaypic from "../../assets/homeimg.png";
import ProjectCards from "../ProjectCards";
import githublogo from "../../assets/github-mark.svg";

const Main = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1) {
        setIsArrowVisible(false);
      } else {
        setIsArrowVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const jsonData = [
    {
      id: 1,
      jobTitle: "Founder, Engineering Head",
      from: "June 2022",
      to: "May 2024",
      description:
        " As a co-founder, my journey has been of multiple responsibilities, where I’ve had the privilege of steering the course of my venture across various domains. I managed system architecture, UI/UX, frontend, backend, database, and deployment, alongside market research and marketing. Following software development principles, I emphasized learning, testing, and iterative improvement to drive growth and strategy. This involved not only conceptualizing the structure but also focus on the intricate details of its implementation ",
      company: "Studnerd",
      skills:
        "Django, Python, API design(Django Rest Framework), React JS, Git, Google Cloud Platform",
      companySite: "https://www.studnerd.com/about-us",
      location: "Pune, MH",
    },
    {
      id: 2,
      jobTitle: "Business Technology Solutions Associate",
      from: "May 2021",
      to: "Nov 2021",
      description:
        " As a data analysis specialist, I developed and maintained code to deliver accurate insights, designing procedures to ingest and process raw sales data from various sources. I preprocessed data to enhance analysis capabilities and created integration plans for seamless product assimilation into clients' infrastructure. My expertise enabled clients to make informed strategic decisions, driving business growth and success.",
      company: "ZS Associates",
      skills: "SQL, Python, AWS",
      companySite: "https://www.zs.com",
      location: "Pune, MH",
    },
    {
      id: 3,
      jobTitle: "Software Developer",
      from: "June 2019",
      to: "May 2021",
      description:
        "As a Software Developer at Tripstack, I developed and maintained the backend API, adding new functionalities and specializing in airline integrations for flight search and booking. I seamlessly integrated features into the EFOE API, set up proxies to handle bots, and configured caching mechanisms to optimize performance and accuracy, ensuring efficient fare caching across all airlines and routes",
      company: "Tripstack",
      skills: "Dotnet, C#, Javascript",
      companySite: "https://www.tripstack.com",
      location: "Pune, MH",
    },
  ];

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{
          alignItems: "center",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          backgroundColor: "",
          // backgroundImage: `url(${vrcurve})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <Grid
          item
          lg={6}
          md={8}
          sm={10}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "yellow",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: ["", "flex", "flex", "flex"],
              // alignItems: "center",
              // flexDirection: "column",
              // backgroundColor: "red",
              // p: "20px",
              pt: "20vh",
            }}
          >
            <Box
              sx={{
                // backgroundColor: "blue",
                width: ["100%", "50%", "50%", "50%"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pb: "40px",
              }}
            >
              <img src={displaypic} />
            </Box>
            <Box
              sx={{
                // backgroundColor: "green",
                width: ["100%", "50%", "50%", "50%"],
                p: "15px",
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontFamily:
                    "Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif",
                  // color: "#66ccff",
                }}
              >
                Hi, I'm
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Berlin sans",
                  // fontSize: ["8rem", "8rem", "10rem", "12rem"],
                  fontSize: "2.5rem",
                  textShadow: "3px 3px 1px rgba(102, 204, 255, 1)",
                  // height: "auto",
                }}
              >
                Vaibhav
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily:
                    "Montserrat,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif",
                  // color: "#66ccff",
                }}
              >
                I am a computer engineer based in Pune, India. I completed my
                Bachelors from Pune Institute of Computer Technology(PICT) in
                2019.
              </Typography>
              <br></br>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily:
                    "Montserrat,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif",
                  // color: "#66ccff",
                }}
              >
                I am a Full Stack developer. I have been passionate about
                building stuff since I was a kid and computers just added a new
                dimension to it.
              </Typography>
            </Box>
          </Box>
          <Box sx={{}}>
            <div className={`down-arrow ${isArrowVisible ? "" : "fade"}`}></div>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={8}
          sm={10}
          xs={12}
          sx={{
            mt: ["50px", "", "", ""],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "yellow",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              // backgroundColor: "pink",
              paddingTop: "50px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Berlin sans",
                // fontSize: ["8rem", "8rem", "10rem", "12rem"],
                fontSize: "2.5rem",
                textShadow: "3px 3px 1px rgba(102, 204, 255, 1)",
              }}
            >
              Projects and Experience
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              // backgroundColor: "cyan",
              pt: "20px",
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {jsonData.map((data) => (
              <Box sx={{ my: "10px", width: "100%" }}>
                <ProjectCards key={data.id} {...data} />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: "50px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              // textAlign: "center",
              // backgroundColor: "pink",
            }}
          >
            {/* <hr></hr> */}
            {/* <br></br> */}
            <Typography sx={{ fontFamily: "Berlin Sans", fontSize: "2rem" }}>
              Contact
            </Typography>
            <Box
              sx={{
                // backgroundColor: "yellow",
                display: "flex",
                pt: "15px",
                minWidth: "100px",
                justifyContent: "space-around",
              }}
            >
              <a
                href="https://www.instagram.com/vaibhavdrathod/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                }}
              >
                <img
                  src={instagramlogo}
                  height="100%"
                  // style={{ marginRight: "25px" }}
                  alt="Youtube Logo"
                />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-rathod-b801b0145/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                }}
              >
                <img
                  src={linkedinlogo}
                  height="100%"
                  // style={{ marginRight: "15px" }}
                  alt="Youtube Logo"
                />
              </a>
              {/* <img
              src={youtubeLogo}
              height="100%"
              style={{ marginRight: "15px" }}
              alt="Youtube Logo"
            /> */}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: "50px",
              textAlign: "center",
            }}
          >
            {/* <hr></hr> */}
            <br></br>
            <Typography
              sx={{
                fontFamily: "montserrat",
                fontSize: "1rem",
                fontWeight: "light",
              }}
            >
              Designed And Developed by Vaibhav Rathod
            </Typography>
            <br></br>
            <Typography
              sx={{
                fontFamily: "montserrat",
                fontSize: "1rem",
                fontWeight: "light",
              }}
            >
              Build using React JS and Material UI, deployed using Github Pages
            </Typography>
            <br></br>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Link target="_blank" to="https://github.com/LEO397/portfolio"> */}
              <Button
                target="_blank"
                href="https://github.com/LEO397/portfolio"
                sx={{
                  borderRadius: "0px",
                  border: "2px solid black",
                  p: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "5px 5px 1px rgba(102, 204, 255, 1)",
                  textTransform: "none",
                  ":hover": {
                    boxShadow: "none",
                    backgroundColor: "#B8E7FF",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "montserrat",
                    fontSize: "1rem",
                    fontWeight: "light",
                    color: "black",
                  }}
                >
                  This Repo is Open Source&nbsp;&nbsp;
                </Typography>
                <img src={githublogo} width="40px" height={"40px"} />
              </Button>
              {/* </Link> */}
            </Box>

            <br></br>
            <Typography
              sx={{
                fontFamily: "montserrat",
                fontSize: "1rem",
                fontWeight: "light",
              }}
            >
              Copyright &copy; 2024-2026 Vaibhav Rathod
            </Typography>
            <br></br>
          </Box>
        </Grid>
        {/* <Navbar /> */}
      </Grid>
    </>
  );
};

export default Main;
