import React, {useState, useRef} from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {SectionTitle} from '../../../components/typography/sectionTitle';
import {Header} from '../../../components/header';
import {Input} from '../../../components/input';
import {Container} from '../../../components/container';
import {SmallCard} from '../../../components/cards/smallCard';
import useStyles from './style';

const suggestions = [
  {
    name: 'Food',
    img: require('../../../assets/img/food.jpg'),
  },
  {
    name: 'Healthy',
    img: require('../../../assets/img/healthy.jpg'),
  },
  {
    name: 'Petit Dej',
    img: require('../../../assets/img/breakfast.jpg'),
  },
  {
    name: 'légumes',
    img: require('../../../assets/img/vegtibles.jpg'),
  },
];

const categories = [
  {
    name: 'Soirées',
    img: require('../../../assets/img/dj.jpg'),
  },
  {
    name: 'Café',
    img: require('../../../assets/img/coffee.jpg'),
  },
  {
    name: 'Services',
    img: require('../../../assets/img/service.jpg'),
  },
  {
    name: 'Restaurants',
    img: require('../../../assets/img/restaurant.jpg'),
  },
  {
    name: 'Chiens',
    img: require('../../../assets/img/dog.jpg'),
  },
  {
    name: 'Chats',
    img: require('../../../assets/img/cat.jpg'),
  },
  {
    name: 'Objets Perdu',
    img: require('../../../assets/img/lost.jpeg'),
  },
  {
    name: 'Pâtisserie',
    img: require('../../../assets/img/cake.jpg'),
  },
];

export default function SearchScreen({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  return (
    <Container>
      <Header>Recherche</Header>
      <Input
        size="large"
        keyboardType={'email-address'}
        source={require('../../../assets/logo/search.png')}
        placeholder="Chercher..."
        // value={userData?.username}
        // onChangeText={value => handleChange('username', value)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionTitle>Nos choix</SectionTitle>
        <View style={styles.listContainer}>
          {suggestions.map((item, index) => (
            <SmallCard img={item?.img} key={item?.name}>
              {item.name}
            </SmallCard>
          ))}
        </View>

        <SectionTitle>Populaire près de chez vous</SectionTitle>
        <View style={styles.listContainer}>
          {categories.map((item, index) => (
            <SmallCard img={item?.img} key={item?.name}>
              {item.name}
            </SmallCard>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
}
