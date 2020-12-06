import styled from 'styled-components';

export const CadastroContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const CadastroFormSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h3`
  margin: 0 0 6px;
  font-family: 'Arial', 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
`;

export const SectionSubTitle = styled.small`
  margin: 6px 12px 0;
  font-family: 'Arial', 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--warm-grey);
`;
