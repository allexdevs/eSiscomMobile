/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Fab, Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function FabButtonComponent({ onPress }) {
  return (
    <Fab
      onPress={onPress}
      bgColor="amber.500"
      _pressed={{ bgColor: 'amber.600' }}
      icon={<Icon as={MaterialCommunityIcons} name="check" size="md" color="white" />}
    />
  );
}

FabButtonComponent.propTypes = {
  onPress: PropTypes.func,
};

FabButtonComponent.defaultProps = {
  onPress: () => {},
};

export default FabButtonComponent;
