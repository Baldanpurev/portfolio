import { Container } from "@mui/material";
import { useContext } from "react";
import { DContext } from "../context/Context";

export const Footer = () => {
  const { dark } = useContext(DContext);
  return (
    <Container
      sx={{
        color: dark ? "#0040ff" : "black",
        textAlign: "center",
        paddingBottom: "3vh",
      }}
      maxWidth="sm"
    >
      © 2023 Altanod Byambasuren. All Right Reserved.
    </Container>
  );
};
