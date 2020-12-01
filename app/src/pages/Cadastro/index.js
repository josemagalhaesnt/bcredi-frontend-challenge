import React from 'react';

import { CadastroSection, SectionTitle, SectionSubTitle } from './styles';
import Form from '../../components/Form';
import FormField from '../../components/Form/FormField';

/* const validationSchema = yup.object.shape({
  nome: yup.string().required(),
  cpf: yup.string().pattern('d{3}.?d{3}.?d{3}-?d{2}'),

}); */

export default function Cadastro() {
  return (
    <CadastroSection>
      <SectionTitle>Criar Meu Cadastro</SectionTitle>
      <SectionSubTitle>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</SectionSubTitle>
      <Form>
        <FormField label="Nome" type="text" placeholder="Digite seu nome completo" />
        <FormField label="CPF" type="text" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" placeholder="123.456.789-00" />
        <FormField label="Data de nascimento" type="date" placeholder="30/11/2020" />
        <FormField label="Senha" type="password" placeholder="Cadastre uma senha" />
      </Form>
    </CadastroSection>
  );
}
