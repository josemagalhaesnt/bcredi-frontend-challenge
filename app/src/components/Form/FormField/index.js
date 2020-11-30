import React from 'react';

import { FieldContainer, FieldLabel, FieldInput } from './styles';

const FormField = ({ label, type, placeholder }) => {
  const fieldID = `${type}-${label}`;

  return (
    <FieldContainer>
      <FieldLabel name={label} htmlFor={fieldID} />
      <FieldInput id={fieldID} title={label} type={type} placeholder={placeholder} />
    </FieldContainer>
  );
};

export default FormField;
