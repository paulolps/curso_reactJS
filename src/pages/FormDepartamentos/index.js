
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import Button from '../../components/Button';
import { Modal } from '../../components/Modal';
import { insertDepartamento } from '../../services/departamentos';
import { Mensagem, Input, Container } from './styles';

const FormDepartamentos = () => {

  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('erro');
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  // validacao do formulario
  const validaForm = () => {
    if (nome === '') {
      setMsg('Preencha o nome');
      setType('erro');
      showModal();
      return false;
    }

    if (sigla === '') {
      setMsg('Preencha a sigla');
      setType('erro');
      return false;
    }
    //declaracao funcao anonima
    //  Module Pattern
    (async () => {
      const [res, err] = await insertDepartamento(nome, sigla)

      if (err && err instanceof AxiosError) {
        if (err.response.status && err.response.status === 500) {
          setMsg(err.message);
        } else {
          setMsg(err.message);
        }
        setType('erro');
      } else {
        const { erro, sucesso } = res.data
        console.log("SUCESSO", res)
        if (erro) {
          setMsg(erro);
          setType('erro');
        } else {
          setMsg(sucesso);
          setType('sucesso');
          setNome('')
          setSigla('')
        }
      }
      showModal();
    }
    )();
  }

  return (
    <>
      <Container>
        <h3>Adicionar Departamento</h3>
        <Input
          type='text'
          name='nome'
          id='nome'
          placeholder='Nome'
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />

        <br />
        <Input
          type='text'
          name='sigla'
          id='sigla'
          placeholder='Sigla'
          value={sigla}
          onChange={(e) => {
            setSigla(e.target.value);
          }}
        />
        <br />
        <Button
          titulo='Enviar'
          onClick={validaForm}
        />
        <Modal show={show} handleClose={() => { showModal() }} >
          <Mensagem type={type}>{msg}</Mensagem>
        </Modal>
      </Container>
    </>
  )
}

export default FormDepartamentos;