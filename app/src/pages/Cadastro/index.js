import React from 'react';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../../constants';

import {
  CadastroContainer,
  CadastroFormSection,
  SectionTitle,
  SectionSubTitle,
} from './styles';
import Testimonial from '../../components/Testimonial';
import CadastroHeader from './components/CadastroHeader';
import CadastroForm from './components/CadastroForm';

/* const validationSchema = yup.object.shape({
  nome: yup.string().required(),
  cpf: yup.string().pattern('d{3}.?d{3}.?d{3}-?d{2}'),

}); */

export default function Cadastro() {
  const isMobile = useMediaQuery(breakpoints.XS);

  return (
    <CadastroContainer>
      {!isMobile && <Testimonial />}

      <CadastroFormSection>
        <CadastroHeader className="Header" />
        <SectionTitle>Criar Meu Cadastro</SectionTitle>
        <SectionSubTitle>
          Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.
        </SectionSubTitle>
        <CadastroForm />
      </CadastroFormSection>
    </CadastroContainer>
  );
}
