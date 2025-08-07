import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';

// Define the type for the route params
type RootStackParamList = {
  Article: { url: string };
};

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

interface Props {
  route: ArticleScreenRouteProp;
}

const ArticleScreen: React.FC<Props> = ({ route }) => {
  const { url } = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default ArticleScreen;
