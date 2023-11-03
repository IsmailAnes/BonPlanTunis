import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {Input} from '../../../components/input';
import {Header} from '../../../components/header';
import {Container} from '../../../components/container';
import useStyles from './style';

export default function LoginScreen({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  return (
    <Container>
      <Header />
      <View style={styles.upperContainer}>
        <View style={{flex:1}}>
          <Text style={styles.title}>Content de te revoir! 🤗</Text>
          <Text style={styles.subTitle}>
            Veuillez entrer les détails de votre compte ci-dessous!
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
            <Input
              size="large"
              register
              source={require('../../../assets/logo/password.png')}
              placeholder="Mot de pass"
              show
              secureTextEntry={true}
              // value={userData?.username}
              // onChangeText={value => handleChange('username', value)}
            />
            <TouchableOpacity onPress={() => navigation.navigate('forgetPswd')}>
            <Text style={styles.forgetpswdText}>
            Mot de passe oublié
            </Text>
          </TouchableOpacity>
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
