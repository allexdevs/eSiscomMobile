import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export const CustomerContext = createContext({});

function CustomerProvider({ children }) {
  // main personal data
  const [name, setName] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [rgIe, setRgIe] = useState('');
  const [phone, setPhone] = useState({});
  const [email, setEmail] = useState({});

  // address data
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [complement, setComplement] = useState('');

  // additional data
  const [additional, setAdditional] = useState('');

  const customer = {
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
    additional,
  };

  function fillInPersonalData(name, fantasyName, cpfCnpj, rgIe, phone, email) {
    setName(name);
    setFantasyName(fantasyName);
    setCpfCnpj(cpfCnpj);
    setRgIe(rgIe);
    setPhone(phone);
    setEmail(email);
  }

  const fillAddress = (address, number, district, zipCode, state, city, complement) => {
    setAddress(address);
    setNumber(number);
    setDistrict(district);
    setZipCode(zipCode);
    setState(state);
    setCity(city);
    setComplement(complement);
  };

  const fillInAdditionalData = (additional) => {
    setAdditional(additional);
  };

  const customerValues = useCallback(
    () => ({ customer, fillInPersonalData, fillAddress, fillInAdditionalData }),
    [customer]
  );

  return <CustomerContext.Provider value={customerValues}>{children}</CustomerContext.Provider>;
}

CustomerProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

CustomerProvider.defaultProps = {
  children: [],
};

export default CustomerProvider;
