import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  width: 170px;
  margin-bottom: 16px;

  color: 000;
  font-weight: 300;
  font-size: 16px;
`;

export const Field = styled.input`
  padding: 5px;

  font-size: 12px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
`;
