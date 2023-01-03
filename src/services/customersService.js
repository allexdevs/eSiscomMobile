import URL_API from '../shared/constants';

const getCustomers = async () => {
  const request = await fetch(`${URL_API}/clients/findAll`);
  const response = await request.json();
  return response;
};

const getCustomerByName = async (name) => {
  const customerName = name.toString().toUpperCase();
  const request = await fetch(`${URL_API}/clients/findByName/${customerName}`);
  const response = await request.json();
  return response;
};

const getCustomerById = async (codigo) => {
  const customerId = parseInt(codigo, 10);
  const request = await fetch(`${URL_API}/clients/findById/${customerId}`);
  const response = await request.json();
  return response;
};

const addNewCustomer = async (
  name,
  fantasyName,
  cpfCnpj,
  rgIe,
  phone,
  email,
  address,
  number,
  district,
  zipCode,
  state,
  city,
  complement,
  additional
) => {
  const request = await fetch(`${URL_API}/clients/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/josn',
    },
    body: JSON.stringify({
      nome: name,
      fantasia: fantasyName,
      cpf_cnpj: cpfCnpj,
      rg_ie: rgIe,
      telefone: phone,
      email,
      rua: address,
      numero: number,
      bairro: district,
      cep: zipCode,
      estado: state,
      cidade: city,
      complemento: complement,
      obs: additional,
    }),
  });

  const response = await request.json();
  return response;
};

export { getCustomers, getCustomerByName, getCustomerById, addNewCustomer };
