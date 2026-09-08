import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
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
      <Text style={styles.title}>Revision App</Text>
      <Text style={styles.subtitle}>Review your details and skills.</Text>
      <Button
        title="View details"
        onPress={() =>
          navigation.navigate('ViewDetails', {
            NameSend: 'Your name',
            SurnameSend: 'Your surname',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#4b5563',
    fontSize: 16,
    marginBottom: 24,
  },
});