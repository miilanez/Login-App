/* eslint-disable react/prop-types */
import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export default function InputTextField({
  id,
  name,
  label,
  type,
  value,
  onChange,
  error,
  helperText,
}) {
  return (
    <FormControl sx={{ width: "100%", my: 1 }} variant="outlined">
      <TextField
        id={id}
        name={name}
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        color="warning"
      />
    </FormControl>
  );
}
