import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {Input} from '../../../components/input';
import {Header} from '../../../components/header';
import {Container} from '../../../components/container';
import useStyles from './style';

export default function SearchScreen({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  return (
    <Container>
      <Header />
      <View style={styles.upperContainer}>
        <View style={{flex:1}}>
          <Text style={styles.title}>Search</Text>
          <Text style={styles.subTitle}>
          Veuillez saisir l'e-mail avec lequel vous vous êtes inscrit pour récupérer le mot de passe
          </Text>

          <View style={{flex:1, marginTop:20}}>
            <Input
              size="large"
              register
              keyboardType={'email-address'}
              source={require('../../../assets/logo/email.png')}
              placeholder="E-mail"
              // value={userData?.username}
              // onChangeText={value => handleChange('username', value)}
            />
          </View>
          
        </View>
        <Button
          label={'CONTINUER'}
          size={'large'}
          backgroundColor={colors.primary}
          onPress={() => null}
          style={{marginBottom:20}}
        />
      </View>
    </Container>
  );
}
