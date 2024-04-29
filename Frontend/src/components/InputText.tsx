import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface StateTextFieldsProps {
    width: string;
    label: string;
    value: string; // Add value prop
    onChange: (value: string) => void; // Add onChange prop
}

export default function StateTextFields({ width, label, value, onChange }: StateTextFieldsProps) {
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: width},
        '& input': { borderColor: '#ff551d' } // Set initial border color
      }}
      style={{ 
        borderColor: "#FA551D",
        color: "#091C62",
        backgroundColor: "#FFF5F3"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label={label}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
      />
    </Box>
  );
}
