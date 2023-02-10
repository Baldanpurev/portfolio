import { Box } from "@mui/material";
import { useContext } from "react";
import { DContext } from "../context/Context";
import { Footer } from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  const { dark } = useContext(DContext);
  return (
    <Box
      sx={{
        backgroundColor: !dark ? " #fff2cc" : "#000d1a",
        display: "flex",
        flexDirection: "column",
        gap: "5vh",
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
