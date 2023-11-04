import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {Button} from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import {Container} from '../../../components/container';
import useStyles from './style';

const {width, height} = Dimensions.get('window');
export default function LandingScreen({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts, height, width);

  const scrollViewRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const contentWidth = 3 * width; // Total width of the content (4 images)

    const interval = setInterval(() => {
      setScrollValue(prevScrollValue => {
        const newScrollValue = prevScrollValue + width;
        if (newScrollValue >= contentWidth) {
          // Reset the scroll value when it exceeds the content width
          return 0;
        }
        return newScrollValue;
      });

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({x: scrollValue, animated: true});
      }
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [scrollValue]);
  return (
    // <View style={{flex: 1}}>
    //   <ImageBackground
    //     source={require('../../../assets/img/Onboarding2.jpg')}
    //     style={styles.imgBgContainer}>

    //   </ImageBackground>
    // </View>

    <View>
      <ScrollView ref={scrollViewRef} horizontal={true} pagingEnabled={true}>
        <ImageBackground
          source={require('../../../assets/img/Onboarding2.jpg')}
          style={styles?.image}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>Cocktail de Saveurs</Text>
            <Text style={styles.subTitle}>Sip & Share, Le Monde en Verre </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/img/Onboarding1.jpg')}
          style={styles?.image}
        >
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>
            Festin de Saveurs
            </Text>
            <Text style={styles.subTitle}>
            Mange & Raconte, L'Art de Savourer
            </Text>
          </View>
          </ImageBackground>
        <ImageBackground
          source={require('../../../assets/img/Onboarding.jpg')}
          style={styles?.image}
        >
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>
            Escapade Insolite
            </Text>
            <Text style={styles.subTitle}>
            Explore & Émerveille-toi: À la Découverte des Perles Cachées
            </Text>
          </View>
          </ImageBackground>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0}}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.gradient}>
          {/* <View style={styles.titlesContainer}>
            <Text style={styles.title}>
              Slogan App Here
            </Text>
            <Text style={styles.subTitle}>
              subTitles App Here
            </Text>
          </View> */}
          <Button
            label={'COMMENCER'}
            size={'large'}
            backgroundColor={colors.primary}
            style={{marginBottom: 40}}
            onPress={() => navigation.navigate('registre')}
          />
        </LinearGradient>
      </View>
    </View>
  );
}
