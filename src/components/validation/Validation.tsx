import React from 'react';
import { StyledValidation } from './Validation.style';

interface ValidationProps {
  message: string;
}

const Validation = ({ message }: ValidationProps) => {
  return <StyledValidation>{message}</StyledValidation>;
};

export default React.memo(Validation);
