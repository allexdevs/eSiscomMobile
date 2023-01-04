/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { listCounties, searchZipCode } from '../services/addressService';

export const CustomerContext = createContext({});

function CustomerProvider({ children }) {
  const [name, setName] = useState('');
  function fillName(name) {
    setName(name);
  }

  const [fantasyName, setFantasyName] = useState('');
  function fillFantasyName(fantasyName) {
    setFantasyName(fantasyName);
  }

  const [cpfCnpj, setCpfCnpj] = useState('');
  function fillCpfCnpj(cpfCnpj) {
    setCpfCnpj(cpfCnpj);
  }

  const [rgIe, setRgIe] = useState('');
  function fillRgIe(rgIe) {
    setRgIe(rgIe);
  }

  const [phone, setPhone] = useState('');
  function fillPhone(phone) {
    setPhone(phone);
  }

  const [email, setEmail] = useState('');
  function fillEmail(email) {
    setEmail(email);
  }

  const [address, setAddress] = useState('');
  function fillAddress(address) {
    setAddress(address);
  }

  const [number, setNumber] = useState('');
  function fillNumber(number) {
    setNumber(number);
  }

  const [district, setDistrict] = useState('');
  function fillDistrict(district) {
    setDistrict(district);
  }

  const [zipCode, setZipCode] = useState('');
  function fillZipCode(zipCode) {
    setZipCode(zipCode);
  }

  const [state, setState] = useState('');
  function fillState(state) {
    setState(state);
  }

  const [city, setCity] = useState('');
  function fillCity(city) {
    setCity(city);
  }

  const [complement, setComplement] = useState('');
  function fillComplement(complement) {
    setComplement(complement);
  }

  const [additional, setAdditional] = useState('');
  function fillAdditional(additional) {
    setAdditional(additional);
  }

  const [listCities, setListCities] = useState([]);

  function listCitiesByState(uf) {
    setListCities([]);
    listCounties(uf)
      .then((responseData) => {
        responseData.status === 'success' ? setListCities(responseData.payload) : setListCities([]);
        console.log(responseData);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  useEffect(() => {
    listCitiesByState(state);
  }, [state]);

  const [modalState, setModalState] = useState('');
  function fillModalState(modalState) {
    setModalState(modalState);
  }

  const [modalCity, setModalCity] = React.useState('');
  function fillModalCity(modalCity) {
    setModalCity(modalCity);
  }

  const [modalComplement, setModalComplement] = React.useState('');
  function fillModalComplement(modalComplement) {
    setModalComplement(modalComplement);
  }

  const [modalListCities, setModalListCities] = useState([]);

  function listCitiesModalByState(uf) {
    setModalListCities([]);
    listCounties(uf)
      .then((responseData) => {
        responseData.status === 'success'
          ? setModalListCities(responseData.payload)
          : setModalListCities([]);
        console.log(responseData);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  useEffect(() => {
    listCitiesModalByState(modalState);
  }, [modalState]);

  const [listZipCode, setListZipCode] = useState([]);

  function lookForZipCode(uf, city, publicPlace) {
    setListZipCode([]);
    searchZipCode(uf, city, publicPlace)
      .then((responseData) => {
        responseData.status === 'success'
          ? setListZipCode(responseData.payload)
          : setListZipCode([]);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (modalState !== '' && modalCity !== '' && modalComplement !== '') {
      lookForZipCode(modalState, modalCity, modalComplement);
    }
  }, [modalState, modalCity, modalComplement]);

  return (
    <CustomerContext.Provider
      value={{
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
        listCities,
        modalState,
        modalCity,
        modalComplement,
        modalListCities,
        listZipCode,
        fillName,
        fillFantasyName,
        fillCpfCnpj,
        fillRgIe,
        fillPhone,
        fillEmail,
        fillAddress,
        fillNumber,
        fillDistrict,
        fillZipCode,
        fillState,
        fillCity,
        fillComplement,
        fillAdditional,
        fillModalState,
        fillModalCity,
        fillModalComplement,
        setListZipCode,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider;
