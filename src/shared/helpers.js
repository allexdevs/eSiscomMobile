import SweetAlert from 'react-native-sweet-alert';

const limitCharacters = (value) => (value.length > 10 ? `${value.slice(0, 8)}...` : value);
const removeSpecialCharacters = (value) =>
  value !== '' ? value.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : null;

const filterCity = (listCities, filterVal) =>
  filterVal !== ''
    ? listCities.filter((value) =>
        value.name.toLowerCase().match(filterVal.toLowerCase()) ? value : null
      )
    : listCities;

const filterState = (listOfStates, filterValue) =>
  filterValue !== ''
    ? listOfStates.filter((value) =>
        value.uf.toLowerCase().match(filterValue.toLowerCase()) ||
        value.value.toLowerCase().match(filterValue.toLowerCase()) ||
        value.label.toLowerCase().match(filterValue.toLowerCase())
          ? value
          : null
      )
    : listOfStates;

const showAlert = (title, message, type, buttonLabel, feedBack) => {
  SweetAlert.showAlertWithOptions(
    {
      title,
      subTitle: message,
      style: type,
      confirmButtonTitle: buttonLabel,
      cancelable: true,
    },
    feedBack
  );
};

const removeMask = (value) =>
  value !== '' ? value.replace(/[a-z]|[A-Z]|[?!@$%&*|\\/#]/g, '') : null;

const toCurrency = (value) => (value !== '' ? `R$ ${parseFloat(value).toFixed(2)}` : null);

export {
  limitCharacters,
  removeSpecialCharacters,
  filterCity,
  filterState,
  showAlert,
  removeMask,
  toCurrency,
};
