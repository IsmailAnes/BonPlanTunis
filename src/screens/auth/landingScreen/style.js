import {StyleSheet} from 'react-native';
export default styles = (colors, fonts) =>
  StyleSheet.create({
    imgBgContainer: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
      flex: 1,
      justifyContent: 'flex-end',
    },
    gradient: {
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titlesContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    title: {
      color: colors.textWhite,
      fontSize: 40,
      fontFamily: fonts.bold,
    },
    subTitle: {
        color: colors.textWhite,
        fontSize: 20,
        fontFamily: fonts.light,
      },
  });
