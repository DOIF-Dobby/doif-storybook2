import React, { ComponentProps } from 'react';
import Column from '../Column';
import Label from '../Label';
import Field from '../Field';
import Select from '../../select/Select';
import { LabelXXXProps } from './LabelXXX';
import { v4 as uuidv4 } from 'uuid';

const LabelSelect = ({
  required,
  label,
  ...selectProps
}: LabelXXXProps & ComponentProps<typeof Select>) => {
  const randomId = uuidv4();

  return (
    <Column>
      <Label htmlFor={randomId} required={required}>
        {label}
      </Label>
      <Field>
        <Select id={randomId} placeholder={label} {...selectProps} />
      </Field>
    </Column>
  );
};

LabelSelect.defaultProps = {
  required: false,
  variant: 'outline',
  color: 'primary',
  disabled: false,
  width: '100%',
  height: '10rem',
};

export default React.memo(LabelSelect);
