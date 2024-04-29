import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

interface SelectIndicatorProps {
  width?: string;
  placeholder?: string;
  height?: string;
  fontSize?: string;
  value?: string;
  onChange: (e: any, value: string) => void
}

export default function SelectIndicator({
  width,
  placeholder,
  height,
  fontSize,
  value,
  onChange
}: SelectIndicatorProps) {
  
  return (
    <Select
      placeholder={placeholder}
      indicator={<KeyboardArrowDown />}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        borderColor: "#FA551D",
        color: "black",
        backgroundColor: "#FFF5F3"
      }}
      sx={{
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
        "& .MuiInput-startDecorator": {
          color: "#FFC0CB",
        }
      }}
      value={value} 
      onChange={onChange}
    >
      <Option value="florida">Florida</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}
