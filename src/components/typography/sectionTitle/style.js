import {StyleSheet} from 'react-native';
export default styles = (colors, fonts) =>
  StyleSheet.create({
  text:{
    color:colors.textPrimary,
    fontFamily:fonts.bold,
    fontSize:20,
    marginBottom:10,
  }
  });
