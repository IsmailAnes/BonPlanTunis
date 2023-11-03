import React, {useState, useRef} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import {Container} from '../../../components/container';
import useStyles from './style';

export default function LandingScreen({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/img/Onboarding.png')}
        style={styles.imgBgContainer}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.gradient}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>
              Slogan App Here
            </Text>
            <Text style={styles.subTitle}>
              subTitles App Here
            </Text>
          </View>
          <Button label={'COMMENCER'} size={'large'} backgroundColor={colors.primary} onPress={()=> navigation.navigate('registre')} />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
