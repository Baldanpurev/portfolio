import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DContext } from "../context/Context";

export const Work = () => {
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
        Work
      </Typography>
      <Typography sx={{ color: dark ? "white" : "black" }}>
        Altanod is a full-stack developer based in Ulaanbaatar who studies and
        developes sites with passion for contributing to face the oncoming
        obstacles of software technlogy.
      </Typography>
    </Box>
  );
};
