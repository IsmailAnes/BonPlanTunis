/**
 * © 2022 The Project My GAT
 * Authors Reactit
 *
 */

import {Text} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import useStyles from './style';

export function SectionTitle(props) {
  const {
    style,
    children,
    ...rest
  } = props;
  
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  return (
    <Text style={styles.text}>
      {children}
    </Text>
  );
}
