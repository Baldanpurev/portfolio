import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DContext } from "../context/Context";
import Work1 from "../images/ss.png";
import Work2 from "../images/ss.png";
import Work3 from "../images/ss.png";

export const Projects = () => {
  const { dark } = useContext(DContext);
  const [more, setMore] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4vh",
      }}
    >
      <Typography
        sx={{
          color: dark ? "white" : "black",
          textDecoration: dark
            ? "underline #0040ff 8px  solid"
            : "underline black 8px  solid",
        }}
        variant="h5"
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "5%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Work1}
            alt="project1"
            style={{
              width: "250px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <Typography variant="h5" sx={{ color: dark ? "white" : "black" }}>
            Work1
          </Typography>
          <Typography variant="h6" sx={{ color: dark ? "white" : "black" }}>
            2021:12:31
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Work2}
            alt="project2"
            style={{
              width: "250px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <Typography variant="h5" sx={{ color: dark ? "white" : "black" }}>
            Work2
          </Typography>
          <Typography variant="h6" sx={{ color: dark ? "white" : "black" }}>
            2022:12:31
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
