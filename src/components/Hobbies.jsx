import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DContext } from "../context/Context";

export const Hobbies = () => {
  const { dark } = useContext(DContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2vh",
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
        I ♥
      </Typography>
      <Typography sx={{ color: dark ? "white" : "black" }}>
        Anime, Math, Basketball, Football, Music, Proggraming
      </Typography>
    </Box>
  );
};
