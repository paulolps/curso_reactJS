import React from 'react';
import { Container, Content } from './styles';

export const Modal = ({ handleClose, show, children }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <Container show={show}>

      <Content>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </Content>

    </Container>
  );
};