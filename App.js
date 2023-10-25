import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
