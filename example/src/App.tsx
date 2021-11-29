import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { TabLayoutView } from 'react-native-tab-layout';

export default function App() {
  return (
    <View style={styles.container}>
      <TabLayoutView style={styles.box}>
        <View key={1} style={styles.page1} />

        <View key={2} style={styles.page2} />
        <View key={3} style={styles.page2} />
        <View key={4} style={styles.page2} />
        <View key={5} style={styles.page2} />
        <View key={6} style={styles.page2} />
        <View key={7} style={styles.page2} />
        <View key={8} style={styles.page2} />
        <View key={9} style={styles.page2} />
      </TabLayoutView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    backgroundColor: 'blue',
  },
  page2: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    backgroundColor: 'orange',
  },
  box: {
    width: '100%',
    height: 600,
    // marginVertical: 20,
    backgroundColor: 'red',
  },
});
