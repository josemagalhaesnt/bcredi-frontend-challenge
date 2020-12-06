import React from 'react';
import { PropTypes } from 'prop-types';
import { FormContainer, FormGroup } from './styles';

const Form = ({ children }) => {
  return (
    <FormContainer className="Form">
      <FormGroup>{children}</FormGroup>
    </FormContainer>
  );
};

Form.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
};

export default Form;
