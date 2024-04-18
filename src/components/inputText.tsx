import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface StateTextFieldsProps {
    width: string;// Define the type of the 'width' prop as string
    label: string;
}

export default function StateTextFields({width, label} : StateTextFieldsProps) {
  const [name, setName] = React.useState('');

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: width},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label={label}
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
    </Box>
  );
}

