import React from 'react';

import { FormContainer, FormGroup} from './styles';
import FormField from './FormField';

const Form = () => {
  return (
    <FormContainer className="Form">
      <FormGroup>
        <FormField label="Nome" type="text" placeholder="Digite seu nome Completo" />
      </FormGroup>
    </FormContainer>
  );
};

export default Form;
