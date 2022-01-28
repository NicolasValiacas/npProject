import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-rn"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome on Tindog</Text>
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
