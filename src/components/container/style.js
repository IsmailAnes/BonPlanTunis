import {StyleSheet} from 'react-native';
export default styles = (colors, finish,transparent) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: finish ? colors.primary : transparent ? 'transparent' : colors.background,
    },
    mainContainer: {flex: 1, paddingTop: 24},
  });
