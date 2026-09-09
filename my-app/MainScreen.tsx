import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import styles from './Styles';

type TabParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
  ListSkills: undefined;
};

type Props = MaterialTopTabScreenProps<TabParamList, 'Home'>;

export default function MainScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.banner} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>Revision App</Text>
        <Text style={styles.subtitle}>Keep your details and skills ready to review.</Text>
        <View style={styles.divider} />
        <Pressable
          style={styles.primaryButton}
          onPress={() =>
          navigation.navigate('ViewDetails', {
            NameSend: 'Youssef',
            SurnameSend: 'Elshazly',
          })
          }
        >
          <Text style={styles.primaryButtonText}>VIEW DETAILS</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('ListSkills')}>
          <Text style={styles.secondaryButtonText}>LIST YOUR SKILLS</Text>
        </Pressable>
      </View>
    </View>
  );
}

