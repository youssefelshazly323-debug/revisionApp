import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import FadeView from './FadeView';

type TabParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
  ListSkills: undefined;
};

type Props = MaterialTopTabScreenProps<TabParamList, 'ViewDetails'>;

function createArrayLog(logArray: string[]) {
  let outputString = '';

  for (const block of logArray) {
    outputString += `${block} `;
  }

  return outputString;
}

export default function ViewDetails({ route }: Props) {
  const details = [
    route.params.NameSend,
    route.params.SurnameSend,
  ];
  const output = createArrayLog(details);

  console.log(output);

  return (
    <FadeView style={styles.container}>
      <View>
        <Text style={styles.title}>Your details</Text>
        <Text style={styles.detail}>Name: {details[0]}</Text>
        <Text style={styles.detail}>Surname: {details[1]}</Text>
      </View>
    </FadeView>
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