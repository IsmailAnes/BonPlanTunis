import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useStyles from './style';

export function SmallCard(props) {
  const {style, children,img, ...rest} = props;

  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts, height, width);
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <ImageBackground
        source={img}
        borderRadius={10}
        style={styles.cardImg}>
      </ImageBackground>
      <View style={{position: 'absolute', bottom: 0}}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.gradient}>
            <Text style={styles.cardText}>{children}</Text>
          </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
