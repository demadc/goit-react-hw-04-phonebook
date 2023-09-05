import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  width: 170px;
  margin-bottom: 32px;

  color: 000;
  font-weight: 400;
  font-size: 16px;
`;

export const Field = styled.input`
  margin-left: auto;
  margin-right: auto;
  padding: 5px;

  font-size: 12px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 12px;
`;

export const Button = styled.button`
  width: 90px;

  text-align: center;
`;
