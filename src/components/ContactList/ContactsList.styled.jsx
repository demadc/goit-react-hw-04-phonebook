import styled from 'styled-components';

export const List = styled.ul`
  display: block;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
`;

export const ItemText = styled.p``;

export const Btn = styled.button`
  width: 70px;
  padding: 5px;

  font-weight: 600;
  font-size: 10px;
  color: rgb(30, 29, 29);

  background-color: rgb(250, 247, 247);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: none;
`;
