import styled from 'styled-components';

export const FieldContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

export const FieldLabel = styled.label`
  font-family: 'Arial', 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: var(--warm-grey);

  &::-webkit-input-placeholder {
    margin: 2px 5.4px 2px 0;
    font-family: 'Arial', 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: var(--pinkish-grey);
  }
`;

export const FieldInput = styled.input`
  width: ${(props) => (!props.width ? '100%' : `${props.width}px`)};
  margin: 7px 0 0;
  padding: 12px 0.6px 12px 14px;
  border-radius: 3px;
  border: solid 1px #e6e6e6;
`;
