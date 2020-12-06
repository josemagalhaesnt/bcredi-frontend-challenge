import React from 'react';

import Form from '../../../../components/Form';
import FormField from '../../../../components/Form/FormField';
import CadastroFormContainer from './styles';

const CadastroForm = () => {
  return (
    <CadastroFormContainer>
      <Form>
        <FormField label="Nome" type="text" placeholder="Digite seu nome completo" />
        <FormField
          label="CPF"
          type="text"
          pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          placeholder="123.456.789-00"
        />
        <FormField label="Data de nascimento" type="date" placeholder="30/11/2020" />
        <FormField label="Senha" type="password" placeholder="Cadastre uma senha" />
      </Form>
    </CadastroFormContainer>
  );
};

export default CadastroForm;
