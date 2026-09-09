import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 18,
    paddingTop: 78,
  },
  banner: { width: '100%', height: 150, marginBottom: 24 },
  content: { alignItems: 'center', paddingHorizontal: 6 },
  title: {
    color: '#7a117c',
    fontSize: 29,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#d0d0d0',
    height: 1,
    marginVertical: 22,
    width: '100%',
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#2099dc',
    justifyContent: 'center',
    minHeight: 46,
    width: '100%',
  },
  primaryButtonText: { color: '#ffffff', fontSize: 13, fontWeight: '700' },
  secondaryButton: {
    alignItems: 'center',
    borderColor: '#2099dc',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 12,
    minHeight: 46,
    width: '100%',
  },
  secondaryButtonText: { color: '#1687c6', fontSize: 13, fontWeight: '700' },
});