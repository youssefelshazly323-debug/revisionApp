import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

type TabParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
  ListSkills: undefined;
};

type Props = MaterialTopTabScreenProps<TabParamList, 'ViewDetails'>;

export default function ViewDetails({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your details</Text>
      <Text style={styles.detail}>Name: {route.params.NameSend}</Text>
      <Text style={styles.detail}>Surname: {route.params.SurnameSend}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  detail: {
    color: '#374151',
    fontSize: 18,
    marginBottom: 12,
  },
});