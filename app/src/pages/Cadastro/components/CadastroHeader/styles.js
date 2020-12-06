import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 5%;
  margin: 38px 0;

  @media (max-width: 760px) {
    justify-content: center;
  }
`;

export default HeaderContainer;
