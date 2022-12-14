import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
  },
  image: {
    width: 320,
    height: 80,
  },
  text: {
    fontSize: 24,
    color: '#555',
    textAlign: 'center',
  },
  animationContainer: {
    position: 'absolute',
  },
})

export default Styles
