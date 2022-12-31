import URL_API from '../shared/constants';

const authenticate = async (username, password) => {
  const req = await fetch(`${URL_API}/auth/login?username=${username}&password=${password}`);
  const res = await req.json();
  return res;
};

export default authenticate;
