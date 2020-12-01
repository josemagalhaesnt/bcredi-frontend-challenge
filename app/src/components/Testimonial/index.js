import React from 'react';
import { TestimonialContainer, TestimonialMessage, TestimonialAuthor } from './styles';
import banner from '../../assets/img/banner.png';

const Testimonial = () => {
  return (
    <TestimonialContainer banner={banner}>
      <TestimonialMessage as="q">
        Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido.
      </TestimonialMessage>
      <TestimonialAuthor>
        <strong>Camila Bragança</strong>, Sideral Tecnologia
      </TestimonialAuthor>
    </TestimonialContainer>
  );
};

export default Testimonial;
