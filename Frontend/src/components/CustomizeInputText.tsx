import * as React from "react";
import Input from "@mui/joy/Input";

interface StateTextFieldsProps {
  width?: string;
  placeholder?: string;
  value: string; // Add value prop
  onChange: (value: string) => void; // Add onChange prop
}

export default function CustomizeInputText({
  width,
  placeholder, value, onChange
}: StateTextFieldsProps) {
  return (
    <Input
      color="primary"
      disabled={false}
      placeholder={placeholder}
      size="md"
      variant="outlined"
      style={{
        width: width,
        borderColor: "#FA551D",
        color: "#091C62",
        backgroundColor: "#FFF5F3",
      }}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      }}
    />
  );
}
