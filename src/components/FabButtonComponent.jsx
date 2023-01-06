/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Fab, Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function FabButtonComponent({ onPress, marginBottom }) {
  return (
    <Fab
      onPress={onPress}
      bgColor="amber.500"
      _pressed={{ bgColor: 'amber.600' }}
      mb={marginBottom}
      icon={<Icon as={MaterialCommunityIcons} name="check" size="md" color="white" />}
    />
  );
}

FabButtonComponent.propTypes = {
  onPress: PropTypes.func,
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FabButtonComponent.defaultProps = {
  onPress: () => {},
  marginBottom: 0,
};

export default FabButtonComponent;
