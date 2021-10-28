import React from 'react';
import { StyledLabel } from './StyledLabel';
import { IInputProps } from '../../types';

const Input: React.FC<IInputProps> = ({ type, text, maxWidth, margin, value, onHandleChange }) => {
  return (
    <StyledLabel maxWidth={maxWidth} margin={margin}>
      {text}
      <input type={type} defaultValue={value} onChange={onHandleChange} />
    </StyledLabel>
  );
};

export default Input;
