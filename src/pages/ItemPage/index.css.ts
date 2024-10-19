import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const formContainer = style({
  width: "100%",
  maxWidth: "500px",
});

export const inputGroup = style({
  display: "flex",
  gap: "20px",
  marginBottom: "20px",
  justifyContent: "center",
});

export const listContainer = style({
  width: "100%",
  maxWidth: "500px",
});

export const backButton = style({
  marginTop: "20px",
});
