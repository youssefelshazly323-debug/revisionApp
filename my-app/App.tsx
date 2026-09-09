import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from './MainScreen';
import ViewDetails from './ViewDetails';
import ListSkills from './ListSkills';

type TabParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
  ListSkills: undefined;
};

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen
          name="ViewDetails"
          component={ViewDetails}
          initialParams={{
            NameSend: 'Your name',
            SurnameSend: 'Your surname',
          }}
        />
        <Tab.Screen name="ListSkills" component={ListSkills} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}