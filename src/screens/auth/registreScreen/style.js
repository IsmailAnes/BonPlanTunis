import {StyleSheet} from 'react-native';
export default styles = (colors, fonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    upperContainer: {
      height: '80%',
      padding: 20,
      justifyContent: 'space-evenly',
    },
    title: {
      fontFamily: fonts.bold,
      fontSize: 30,
      color: colors.textPrimary,
    },
    subTitle: {
      fontFamily: fonts.light,
      fontSize: 18,
      color: colors.textGrey,
    },
    downContainer: {
      height: '20%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
