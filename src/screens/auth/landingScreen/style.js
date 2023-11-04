import {StyleSheet} from 'react-native';
export default styles = (colors, fonts, height, width) =>
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
      height: height/2,
      width:width,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    titlesContainer: {
      alignItems: 'center',
      height:height/2,
      justifyContent:'flex-end',
      marginBottom: 40,
    },
    title: {
      color: colors.textWhite,
      fontSize: 35,
      textAlign:'center',
      fontFamily: fonts.bold,
    },
    subTitle: {
        color: colors.textWhite,
        fontSize: 20,
        fontFamily: fonts.regular,
        textAlign:'center',
        marginTop:10
      },
      image:{
        height:height,
        width:width,
        resizeMode:'cover',
        flex:1,
        justifyContent:'center'
      }
  });
