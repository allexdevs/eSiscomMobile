import React, { useRef, useEffect } from 'react'
import { Animated, Dimensions, View, Text } from 'react-native'
import { NativeBaseProvider, Image } from 'native-base'

// Styles
import Styles from './styles'

// images
import logo from '../../assets/logo-light.png'
import icon from '../../assets/eSiscom-Mobile-icon.jpeg'

const SplashScreen = ({ navigation }) => {
  const logoAnim = useRef(new Animated.Value(0)).current
  const iconAnim = useRef(new Animated.Value(0)).current

  const oneAnim = () => {
    Animated.sequence([
      Animated.timing(logoAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(logoAnim, {
        toValue: 0,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(iconAnim, {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true,
      }),
      Animated.timing(iconAnim, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const toLogin = () => {
    setTimeout(() => {
      navigation.navigate('LoginScreen')
    }, 15000)
  }

  useEffect(() => {
    oneAnim()
    toLogin()
  }, [])

  return (
    <NativeBaseProvider>
      <View style={Styles.mainContainer}>
        <Animated.View
          style={[Styles.animationContainer, { opacity: logoAnim }]}
        >
          <Image alt="logo" source={logo} resizeMode="contain" />
        </Animated.View>
        <Animated.View
          style={[Styles.animationContainer, { opacity: iconAnim }]}
        >
          <Image
            alt="icone"
            style={Styles.image}
            source={icon}
            resizeMode="contain"
          />
          <Text style={Styles.text}>eSiscomMobile</Text>
        </Animated.View>
      </View>
    </NativeBaseProvider>
  )
}

export default SplashScreen
