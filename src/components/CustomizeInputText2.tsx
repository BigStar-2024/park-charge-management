import * as React from "react";
import Input from '@mui/joy/Input';

interface StateTextFieldsProps {
  width?: string;
  placeholder?: string; 
}

export default function CustomizeInputText2({ width, placeholder }: StateTextFieldsProps) {
  return (
    <Input
      startDecorator="#"
      color="primary"
      disabled={false}
      placeholder={placeholder}
      size="md"
      variant="outlined"
      style={{ width: width, borderColor: "#FA551D", color: "#FA551D", backgroundColor: "#FFF5F3"}}
      sx={{
        "& .MuiInput-startDecorator": {
          color: "#FFC0CB", // Set the color of the startDecorator
        }
      }}
    />
  );
}
