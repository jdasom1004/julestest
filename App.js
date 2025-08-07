import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeedScreen from './screens/NewsFeedScreen';
import ArticleScreen from './screens/ArticleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NewsFeed"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{ title: '코리아 뉴스' }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{ title: '기사 보기' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
