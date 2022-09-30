import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDepartamento } from '../../services/departamentos';

const DepartamentoDetalhes = () => {

  const { idDepartamento } = useParams();

  const [departamento, setDepartamento] = useState();

  const loadDepartamento = async (id) => {

    console.log("departamento", id)
    let retorno = await getDepartamento(id)
    if (retorno.length > 0) {
      setDepartamento(retorno[0]);

    }
    console.log("Departamento", departamento)
  }


  useEffect(() => {
    if (!departamento) {
      loadDepartamento(idDepartamento);
    }
  })

  return (
    departamento &&
    <>
      <h1>Detalhes do Departamento</h1>
      <p>ID do Departamento: {departamento.id_departamento}</p>
    </>
  )
}

export default DepartamentoDetalhes;

