/* eslint-disable react/prop-types */
import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export default function InputTextField({ Label, Type }) {
  return (
    <FormControl sx={{ width: "100%", my: 1 }} variant="outlined">
      <TextField
        id="outlined-basic"
        label={Label}
        variant="outlined"
        color="warning"
        type={Type}
      />
    </FormControl>
  );
}
