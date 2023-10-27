/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

export default function ContainedButton({ label, type }) {
  return (
    <FormControl
      sx={{
        display: "flex",
        alignItems: "center",
        m: 1,
      }}
    >
      <Button
        sx={{
          height: "50px",
        }}
        variant="contained"
        color="warning"
        type={type}
      >
        {label}
      </Button>
    </FormControl>
  );
}
