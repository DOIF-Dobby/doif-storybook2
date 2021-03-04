import React, { ComponentProps } from 'react';
import Column from '../Column';
import Label from '../Label';
import Field from '../Field';
import Datepicker from '../../datepicker/Datepicker';
import { LabelXXXProps } from './LabelXXX';
import { v4 as uuidv4 } from 'uuid';

const LabelInput = ({
  required,
  label,
  columnWidth,
  ...datepickerProps
}: LabelXXXProps & ComponentProps<typeof Datepicker>) => {
  const randomId = uuidv4();

  return (
    <Column width={columnWidth}>
      <Label htmlFor={randomId} required={required}>
        {label}
      </Label>
      <Field>
        <Datepicker id={randomId} {...datepickerProps} />
      </Field>
    </Column>
  );
};

LabelInput.defaultProps = {
  required: false,
  width: '100%',
  color: 'primary',
};

export default React.memo(LabelInput);
