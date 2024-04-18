import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BasicButtonsProps {
    text: string;
    width: string;
    paddingX?: string;
    paddingY?: string;
    bgColor?: string;
    hoverColor?: string;
    fontSize?: string;
}

export default function BasicButtons({text, width, paddingX, paddingY, bgColor, hoverColor, fontSize}: BasicButtonsProps) {
  return (
    <Stack spacing={2} direction="row"> 
      <Button variant="contained" sx={{ width: width, paddingX: paddingX, paddingY: paddingY, backgroundColor: bgColor, '&:hover': {backgroundColor: hoverColor}, fontSize: fontSize}}>{text}</Button> 
    </Stack>
  );
}