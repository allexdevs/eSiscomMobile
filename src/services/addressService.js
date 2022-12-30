import { URL_API } from '../shared/constants'

const searchZipCode = async (uf, city, plublicPlace) => {
  const request = await fetch(
    `${URL_API}/address/searchZipCode?uf=${uf}&city=${city}&public_palce=${plublicPlace}`,
  )
  const response = await request.json()
  return response
}

const consultAddress = async (zipCode) => {
  const request = await fetch(`${URL_API}/address/consultAddress?zipCode=${zipCode}`)
  const response = await request.json()
  return response
}

const listCounties = async (uf) => {
  const request = await fetch(`${URL_API}/address/listCounties?uf=${uf}`)
  const response = await request.json()
  return response
}

export { searchZipCode, consultAddress, listCounties }
