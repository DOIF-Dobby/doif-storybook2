import React, { ComponentProps } from 'react';
import Column from '../Column';
import Label from '../Label';
import Field from '../Field';
import Input from '../../input/Input';
import { LabelXXXProps } from './LabelXXX';
import { v4 as uuidv4 } from 'uuid';

const LabelInput = ({
  required,
  label,
  ...inputProps
}: LabelXXXProps & ComponentProps<typeof Input>) => {
  const randomId = uuidv4();

  return (
    <Column>
      <Label htmlFor={randomId} required={required}>
        {label}
      </Label>
      <Field>
        <Input id={randomId} {...inputProps} />
      </Field>
    </Column>
  );
};

LabelInput.defaultProps = {
  required: false,
  variant: 'outline',
  color: 'primary',
  width: '100%',
  disabled: false,
};

export default React.memo(LabelInput);
