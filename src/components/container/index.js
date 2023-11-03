/**
 * © 2022 The Project My GAT
 * Authors Reactit
 *
 */

import {View, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import useStyles from './style';

export function Container(props) {
  const {children, finish,transparent} = props;
  const {colors} = useTheme();
  const styles = useStyles(colors, finish,transparent)
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={finish ? 'light-content' :"dark-content"}
        translucent
      />
      <View style={styles.mainContainer}>{children}</View>
    </View>
  );
}
