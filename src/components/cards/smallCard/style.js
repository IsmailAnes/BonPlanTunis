import {StyleSheet} from 'react-native';
export default styles = (colors, fonts, height, width) =>
  StyleSheet.create({
    cardContainer:{
    height:height * .1,
    width:width * .45,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginBottom:10
  },
  cardImg:{
    flex:1,
    resizeMode:'contain',
  },
  gradient: {
    borderRadius: 10,
    height: (height * .1)/2,
    width:width * .45,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardText:{
    color:colors.textWhite,
    fontFamily:fonts.medium,
    fontSize:24
  }
  });
