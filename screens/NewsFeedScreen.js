import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Parser from 'rss-parser';

const parser = new Parser();
const FEED_URL = 'https://news.google.com/rss?hl=ko&gl=KR&ceid=KR:ko';

const NewsFeedScreen = ({ navigation }) => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const parsedFeed = await parser.parseURL(FEED_URL);
        setFeed(parsedFeed.items);
        setError(null);
      } catch (e) {
        setError('뉴스를 불러오는 데 실패했습니다.');
        console.error('Error fetching feed:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Article', { url: item.link })}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>뉴스 로딩 중...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item.guid}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  separator: {
    height: 0, // We are using margins now, so separator is not needed
  },
  errorText: {
    color: '#d9534f',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NewsFeedScreen;
