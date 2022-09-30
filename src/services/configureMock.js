import MockAdapter from 'axios-mock-adapter';
import departamentoMock from '../mocks/departamentosMock.json';

const configureMock = (axios) => {
  const mock = new MockAdapter(axios);
  // aqui vamos configurar os responses
  mock.onGet('/departamentos/').reply(200, departamentoMock)

  mock.onPost('/departamentos/').reply(200, {
    sucesso: 'Departamento adicionado'
  })
}
export default configureMock; 