import { URL_API } from '../shared/constants'

const getCustomers = async () => {
  const request = await fetch(`${URL_API}/clients/findAll`)
  const response = await request.json()
  return response
}

const getCustomerByName = async name => {
  let customerName = name.toString().toUpperCase()
  const request = await fetch(`${URL_API}/clients/findByName/${customerName}`)
  const response = await request.json()
  return response
}

const getCustomerById = async codigo => {
  let customerId = parseInt(codigo)
  const request = await fetch(`${URL_API}/clients/findById/${customerId}`)
  const response = await request.json()
  return response
}

export { getCustomers, getCustomerByName, getCustomerById }
