import {StyleSheet} from 'react-native';
export default styles = (colors, fonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    upperContainer: {
     flex:1,
      padding: 20,
      justifyContent: 'space-between',
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
      flex:1,
      backgroundColor:'red',
      height: '20%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    forgetpswdText:{
      color:colors.primary,
      fontFamily:fonts.light,
      alignSelf:'flex-end'
    },
    topicContainer: {
      borderWidth: 1,
      borderColor: '#ecd9d9',
      borderBottomWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      height: 38,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 5,
      backgroundColor: '#FFF'
  },
  topicContainerSelected: {
    borderWidth: 1,
    borderColor: '#ecd9d9',
    borderBottomWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    backgroundColor: colors.textGrey
},
  topicText: {
      fontSize: 14,
      fontWeight: '500',
      marginLeft: 5
  },
  topicTextSelected: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 5,
    color:colors.textWhite
},
  });
