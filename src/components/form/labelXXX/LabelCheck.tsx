import React, { ComponentProps } from 'react';
import Column from '../Column';
import Label from '../Label';
import Field from '../Field';
import Check from '../../check/Check';
import { LabelXXXProps } from './LabelXXX';

const LabelCheck = ({
  required,
  label,
  ...checkProps
}: LabelXXXProps & ComponentProps<typeof Check>) => {
  return (
    <Column>
      <Label required={required}>{label}</Label>
      <Field>
        <Check {...checkProps} />
      </Field>
    </Column>
  );
};

LabelCheck.defaultProps = {
  required: false,
  color: 'primary',
  disabled: false,
  icon: 'check',
};

export default React.memo(LabelCheck);
