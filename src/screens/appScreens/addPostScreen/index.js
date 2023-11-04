import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {Input} from '../../../components/input';
import {Header} from '../../../components/header';
import {Container} from '../../../components/container';
import useStyles from './style';

export default function AddPostScreen({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  return (
    <Container>
    </Container>
  );
}
