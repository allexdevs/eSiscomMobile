/* eslint-disable import/extensions */
import { StyleSheet } from 'react-native';

// other styles
import SharedStyles from '../../../shared/styles/ScreenStyle.js';

const Styles = StyleSheet.create({
  container: SharedStyles.screenTemplate,
  logo: {
    width: 200,
    height: 80,
    marginTop: 56,
  },
});

export default Styles;
