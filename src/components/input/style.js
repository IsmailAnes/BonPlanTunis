import {StyleSheet} from 'react-native';
export default styles = (colors, register, size, editable) =>
  StyleSheet.create({
    container: {
      width: size === 'large' ? '100%' : '48%',
      backgroundColor: register ? colors.background : colors.background,
      borderWidth: register ? 0.4 : 0,
      borderColor: register ? colors.textPrimary : 'transparent',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      paddingLeft: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      overflow: 'hidden',
    },
    logo: {
      height: 20,
      width: 20,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
      marginRight: 15,
    },
    edit: {
      height: 15,
      width: 15,
      resizeMode: 'contain',
    },
    input: {
      flex: 1,
      minHeight: 55,
      maxHeight: 90,
      fontSize: 14,
      color: !editable ? `${colors.text}33` : colors.text,
    },
    rightIconContainer: {
      position: 'absolute',
      right: 0,
      height: '100%',
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
