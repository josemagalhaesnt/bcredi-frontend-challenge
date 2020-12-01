import styled from 'styled-components';

export const TestimonialContainer = styled.aside`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0) 16%,
      rgba(0, 0, 0, 0) 42%,
      rgba(0, 0, 0, 0.5) 69%,
      rgba(0, 0, 0, 0.8) 96%
    ),
    url(${(props) => props.banner});
  background-size: cover;
  background-position: center top;
  background-color: #160f2f;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5%;
  width: 35%;
  height: 100vh;
`;

const TestimonialText = styled.span`
  color: white;
  font-family: 'Arial', 'Roboto', sans-serif;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  margin: 8px 0;
`;

export const TestimonialMessage = styled(TestimonialText)`
  font-size: 20px;
`;

export const TestimonialAuthor = styled(TestimonialText)`
  font-size: 16px;
`;
