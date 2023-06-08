import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  outline: none;
  transition: all 0.5s ease 0s;

  &:hover {
    background-color: #d9dae0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 0px 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(20, 58, 46);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease 0s;
 
  &:hover,
  &:focus {
    background-color: #fff;
    color: rgb(20, 58, 46);
  }

  &:active {
    scale: 1.1  ;
  }
`;