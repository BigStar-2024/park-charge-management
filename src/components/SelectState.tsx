import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

interface StateTextFieldsProps {
  width?: string;
  placeholder?: string; 
}

export default function SelectIndicator({width, placeholder} : StateTextFieldsProps) {
  return (
    <Select
      placeholder={placeholder}
      indicator={<KeyboardArrowDown />}
      style={{ width: width, borderColor: "#FA551D", color: "#FA551D", backgroundColor: "#FFF5F3"}}
      sx={{
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
        "& .MuiInput-startDecorator": {
          color: "#FFC0CB", // Set the color of the startDecorator
        }
      }}
    >
      <Option value="dog">Florida</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}