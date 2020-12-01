import React from 'react';
import PropTypes from 'prop-types';
import { FieldContainer, FieldLabel, FieldInput } from './styles';

const FormField = ({ width, label, type, placeholder }) => {
  const fieldID = `${type}-${label}`;

  return (
    <FieldContainer width={width}>
      <FieldLabel htmlFor={fieldID}>{label}</FieldLabel>
      <FieldInput id={fieldID} title={label} type={type} placeholder={placeholder} required />
    </FieldContainer>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.number,
};

FormField.defaultProps = {
  placeholder: undefined,
  width: 375,
};

export default FormField;
