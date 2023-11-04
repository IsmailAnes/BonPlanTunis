import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme, useNavigation} from '@react-navigation/native';
import useStyles from './style';

export function Header(props) {
  const {children, backPress, white, rightIcon} = props;
  const {colors, fonts} = useTheme();
  const navigation = useNavigation();
  const styles = useStyles(colors, fonts, white);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      {backPress && (
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/logo/arrow_back.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
      )}

      {rightIcon && <View style={styles.rigthContainer}>{rightIcon}</View>}
    </View>
  );
}
