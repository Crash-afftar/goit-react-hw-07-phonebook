import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 15px;

  background-color: #fff;
  transition: 0.5s;

  &:hover {
    background-color: #d9dae0;
  }
`;
export const ButtonDelete = styled.button`
  display: inline-block;
  padding: 5px;

  margin: 0;
  border: none; 
  border-radius: 50%;
  background-color: rgb(20, 58, 46);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  

  &:hover,
  &:focus {
    background-color: #fff;
    color: rgb(255, 0, 0);
  }


  
  &:active {
    scale: 1.1;
  }
`;