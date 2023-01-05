/* eslint-disable object-shorthand */
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
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: name,
      fantasia: fantasyName,
      cpf_cnpj: cpfCnpj,
      rg_ie: rgIe,
      telefone: phone,
      email: email,
      rua: address,
      numero: number,
      bairro: district,
      cep: zipCode,
      estado: state,
      cidade: city,
      complemento: complement,
      obs: additional,
      status: 'A',
      vlr_total_vendas: '0',
    }),
  });

  const response = await request.json();
  return response;
};

const updateCustomer = async (
  id,
  name,
  fantasyName,
  cpfCnpj,
  rgIe,
  address,
  district,
  city,
  state,
  zipCode,
  complement,
  number,
  additional,
  email,
  phone,
  status,
  totalValueInSales
) => {
  const request = await fetch(`${URL_API}/clients/update/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: name,
      fantasia: fantasyName,
      cpf_cnpj: cpfCnpj,
      rg_ie: rgIe,
      rua: address,
      bairro: district,
      cidade: city,
      estado: state,
      cep: zipCode,
      complemento: complement,
      numero: number,
      obs: additional,
      email,
      telefone: phone,
      status,
      vlr_total_vendas: totalValueInSales,
    }),
  });
  const response = await request.json();
  return response;
};

const deleteCustomer = async (id) => {
  const request = await fetch(`${URL_API}/clients/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();
  return response;
};

export {
  getCustomers,
  getCustomerByName,
  getCustomerById,
  addNewCustomer,
  updateCustomer,
  deleteCustomer,
};
