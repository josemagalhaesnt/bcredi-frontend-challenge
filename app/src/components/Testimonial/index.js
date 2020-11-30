import React from 'react';
import { css } from 'styled-components';

import { TestimonialContainer, TestimonialMessage, TestimonialAuthor } from './styles';
import banner from '../../assets/img/banner.png';

const Testimonial = () => {
  const styledBackgroundImage = css`
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0) 16%,
        rgba(0, 0, 0, 0) 42%,
        rgba(0, 0, 0, 0.5) 69%,
        rgba(0, 0, 0, 0.8) 96%
      ),
      url(${banner})
  `;

  return (
    <TestimonialContainer style={{ styledBackgroundImage }}>
      <TestimonialMessage>
        "Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."
      </TestimonialMessage>
      <TestimonialAuthor>
        <strong>Camila Bragança</strong>, Sideral Tecnologia
      </TestimonialAuthor>
    </TestimonialContainer>
  );
};

export default Testimonial;
