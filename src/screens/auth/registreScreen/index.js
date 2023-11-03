import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {Input} from '../../../components/input';
import {Header} from '../../../components/header';
import {Container} from '../../../components/container';
import useStyles from './style';

export default function RegistreScreen({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  return (
    <Container>
      <Header>Register</Header>
      <View
        style={styles.upperContainer}>
        <View>
          <Text style={styles.title}>
            Bienvenue sur l'application Bon Plan Tunis
          </Text>
          <Text style={styles.subTitle}>
            Veuillez entrer les détails de votre compte ci-dessous!
          </Text>
        </View>
        <View>
          <Input
            size="large"
            register
            keyboardType={'email-address'}
            source={require('../../../assets/logo/users.png')}
            placeholder="Nom"
            // value={userData?.username}
            // onChangeText={value => handleChange('username', value)}
          />
           <Input
            size="large"
            register
            keyboardType={'email-address'}
            source={require('../../../assets/logo/users.png')}
            placeholder="Prenom"
            // value={userData?.username}
            // onChangeText={value => handleChange('username', value)}
          />
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
        </View>
        <Button
          label={'CONTINUER'}
          size={'large'}
          backgroundColor={colors.primary}
          onPress={() =>  navigation.navigate('setupAccount')}
        />
      </View>
      <View style={styles.downContainer}>
        <Text style={styles?.subTitle}>
          Already have account with us?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text text70L color={colors.primary}>
              Sign in
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </Container>
  );
}
