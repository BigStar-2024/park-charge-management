import * as React from "react";
import Input from '@mui/joy/Input';

interface StateTextFieldsProps {
  width?: string;
  placeholder?: string; 
}

export default function CustomizeInputText({ width, placeholder }: StateTextFieldsProps) {
  return (
    <Input
      color="primary"
      disabled={false}
      placeholder={placeholder}
      size="md"
      variant="outlined"
      style={{ width: width, borderColor: "#FA551D", color: "#091C62", backgroundColor: "#FFF5F3"}}
    />
  );
}
