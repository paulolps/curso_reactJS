import api from './api';

const headers = {
  'Authorization': 'Bearer PROCEMPA'
}

export const getDepartamentos = async () => {
  const resp = await api.get('/departamentos/', { headers });
  return resp.data;
}

export const getDepartamento = async (id) => {
  console.log("ID DEPARTAMENTO", id)
  const resp = await api.get(`/departamentos/${id}`, { headers });
  return resp.data;
}

export const insertDepartamento = async (nome, sigla) => {

  var bodyFormData = new FormData();
  bodyFormData.append('nome', nome);
  bodyFormData.append('sigla', sigla);

  const headersForm = { headers: { 'Authorization': 'Bearer PROCEMPA', "content-type": 'multipart/form-data', } }

  console.log("DADOS", { nome, sigla })
  console.log("HEADERS", headersForm)

  try {
    const res = await api.post(`/departamentos/`, bodyFormData, headersForm)
    console.log("DEPTO", res)
    return [res, null];
  } catch (err) {
    console.error(Error(err.message ?? err));
    // You can also log error messages to an error reporting service here
    return [null, err];
  }

};
