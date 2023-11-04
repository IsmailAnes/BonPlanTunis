import {StyleSheet} from 'react-native';
export default styles = (colors, fonts, white) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    title: {
      fontFamily: fonts.bold,
      color: white ? colors.card : colors.text,
      fontSize: 16,
      //paddingHorizontal: 20,
      textAlign: 'center',
    },
    backContainer: {position: 'absolute', left: 15},
    backImg: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
    },
    rigthContainer: {
      position: 'absolute',
      right: 15,
      height: 40,
      width:40,
    },
  });
