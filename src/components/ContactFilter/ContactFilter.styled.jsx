import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  padding: 0;
    margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  transition: 0.5s;
  outline: none;

  &:hover {
    background-color: #d9dae0;
  }
`;