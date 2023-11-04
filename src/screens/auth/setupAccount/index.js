import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Text, ProgressBar} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {Input} from '../../../components/input';
import {Header} from '../../../components/header';
import {Container} from '../../../components/container';
import useStyles from './style';
import Steve from 'react-native-steve';

const topics = [
  {
    emoji: '🍻',
    text: 'Entertainment',
  },
  {
    emoji: '🐈',
    text: 'Cats',
  },
  {
    emoji: '🦾',
    text: 'Robots',
  },
  {
    emoji: '🎉',
    text: 'Party',
  },
  {
    emoji: '🌍',
    text: 'World',
  },
  {
    emoji: '📚',
    text: 'Books',
  },
  {
    emoji: '👘',
    text: 'Fashion',
  },
  {
    emoji: '📱',
    text: 'Applications',
  },
  {
    emoji: '📸',
    text: 'Photography',
  },
  {
    emoji: '🧠',
    text: 'Ideas',
  },
  {
    emoji: '⚔️',
    text: 'War',
  },
  {
    emoji: '💼',
    text: 'Business',
  },
  {
    emoji: '🎭',
    text: 'Theater',
  },
  {
    emoji: '📮',
    text: 'Job',
  },
];
export default function SetupAccount({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = useStyles(colors, fonts);
  const {topicContainer, topicText} = styles;
  const [selectedTopics, setSelectedTopics] = useState([]);
  const toggleTopicSelection = topic => {
    // Check if the topic is already selected
    if (selectedTopics.includes(topic)) {
      // If selected, remove it from the selectedTopics array
      setSelectedTopics(
        selectedTopics.filter(selectedTopic => selectedTopic !== topic),
      );
    } else {
      // If not selected, add it to the selectedTopics array
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const renderTopic = ({item}) => {
    const {emoji, text} = item;
    const isSelected = selectedTopics.includes(item);
    return (
      <TouchableOpacity
        style={[
          isSelected ? styles.topicContainerSelected : styles.topicContainer,{opacity:selectedTopics?.length >=5 && !selectedTopics.includes(item) && .5}]
        }
        disabled={selectedTopics.includes(item) ? false : selectedTopics?.length>=5 ? true : false}
        onPress={() => toggleTopicSelection(item)}>
        <Text>{emoji}</Text>
        <Text style={isSelected ? styles.topicTextSelected : styles.topicText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Header />
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Choisissez vos intérêts 🧠</Text>
        <Text style={styles.subTitle}>
        Sélectionnez les sujets qui vous intéressent!
        </Text>
        <View style={{flex: 1, marginTop:20}}>
          <Steve
            data={topics}
            renderItem={renderTopic}
            onPress={() => console.warn('hi')}
            keyExtractor={item => item.text}
          />
        </View>
        <Text style={{alignSelf:'flex-end', marginBottom:5}}>
        {selectedTopics?.length} / 5 sélectionnés
        </Text>
        <ProgressBar progress={selectedTopics?.length * 20} progressColor={colors.primary} style={{marginBottom:20}}/>
        <Button
          label={'CONTINUER'}
          size={'large'}
          backgroundColor={colors.primary}
          disabled={selectedTopics?.length<5}
          onPress={() => navigation.navigate('tabs')}
          style={{marginBottom: 20}}
        />
      </View>
    </Container>
  );
}
