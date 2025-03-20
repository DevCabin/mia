import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatUI from './components/ChatUI';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatUI />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});