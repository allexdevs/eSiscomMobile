import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import PropTypes from 'prop-types';

function LoadingComponent({ show }) {
  return (
    <AwesomeAlert
      show={show}
      showCancelButton={false}
      showConfirmButton={false}
      closeOnHardwareBackPress={false}
      closeOnTouchOutside={false}
      showProgress
    />
  );
}

LoadingComponent.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default LoadingComponent;
