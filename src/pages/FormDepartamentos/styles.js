import styled from 'styled-components';

export const Mensagem = styled.p`
  color: ${(props) => props.type === 'erro' ? 'red' : 'green'};
`;

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  h3, button {
    margin-left: 25px;
  }
  button {
    width: 100px;
  }  
`;


export const Input = styled.input` 
  display: flex;
  margin-left: 25px;
  height: 6vh;
  width: 400px;


`;


