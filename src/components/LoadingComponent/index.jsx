import React, { useRef, useCallback } from 'react';
import { View, Modal, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

function LoadingComponent() {
  const rotationValue = useRef(new Animated.Value(0)).current;

  useCallback(() => {
    const fullRotation = () => {
      Animated.sequence([
        Animated.timing(rotationValue, {
          toValue: 0,
          useNativeDriver: false,
          duration: 2000,
        }),
        Animated.timing(rotationValue, {
          toValue: 360,
          useNativeDriver: false,
          duration: 2000,
        }),
      ]);
    };
    Animated.loop(fullRotation, {
      iterations: -1,
    }).start();
  }, [rotationValue]);

  return (
    <Modal visible transparent animationType="fade">
      <View style={Styles.container}>
        <Animated.View style={{ transform: [{ rotate: `${rotationValue.current}deg` }] }}>
          <Icon name="loading" size={32} color="white" />
        </Animated.View>
      </View>
    </Modal>
  );
}

export default LoadingComponent;
