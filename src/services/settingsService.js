import { URL_API } from '../shared/constants'

const config = async (host, database, username, password, port) => {
  const request = await fetch(`${URL_API}/settings/config`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      host: host,
      database: database,
      username: username,
      password: password,
      port: port,
    }),
  })

  const response = await request.json()
  return response
}

export { config }
