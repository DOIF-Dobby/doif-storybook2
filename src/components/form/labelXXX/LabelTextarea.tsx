import React, { ComponentProps } from 'react';
import Column from '../Column';
import Label from '../Label';
import Field from '../Field';
import Textarea from '../../textarea/Textarea';
import { LabelXXXProps } from './LabelXXX';
import { v4 as uuidv4 } from 'uuid';

const LabelTextarea = ({
  required,
  label,
  columnWidth,
  ...textareaProps
}: LabelXXXProps & ComponentProps<typeof Textarea>) => {
  const randomId = uuidv4();

  return (
    <Column width={columnWidth}>
      <Label htmlFor={randomId} required={required}>
        {label}
      </Label>
      <Field>
        <Textarea id={randomId} {...textareaProps} />
      </Field>
    </Column>
  );
};

LabelTextarea.defaultProps = {
  required: false,
  color: 'primary',
  width: '100%',
  disabled: false,
  resize: 'none',
  rows: 10,
};

export default React.memo(LabelTextarea);
