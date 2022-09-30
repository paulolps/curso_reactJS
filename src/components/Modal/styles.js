
import styled from 'styled-components';

export const Container = styled.div`
  
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-items: center;

  display: ${(props) => props.show ? 'flex' : 'none'};
`;

export const Content = styled.section`
 
  position: absolute;
  background: white;
 
  top: 50%;
  left: 50%;
  //transform: translate(-50%, -50%);
  height: auto;

 

`;


