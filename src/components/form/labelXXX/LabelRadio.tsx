import React, { ComponentProps } from 'react';
import Column from '../Column';
import Label from '../Label';
import Field from '../Field';
import Radio from '../../radio/Radio';
import { LabelXXXProps } from './LabelXXX';

const LabelRadio = ({
  required,
  label,
  ...radioProps
}: LabelXXXProps & ComponentProps<typeof Radio>) => {
  return (
    <Column>
      <Label required={required}>{label}</Label>
      <Field>
        <Radio {...radioProps} />
      </Field>
    </Column>
  );
};

LabelRadio.defaultProps = {
  required: false,
  color: 'primary',
  disabled: false,
};

export default React.memo(LabelRadio);
