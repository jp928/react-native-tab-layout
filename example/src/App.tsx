import * as React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import { TabLayoutView } from 'react-native-tab-layout';

export default function App() {
  // const [titles, setTitles] = React.useState<string[]>([]);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setTitles(['Category1', 'Category2', 'Category3']);
  //   }, 500);
  // }, []);

  return (
    <View style={styles.container}>
      <TabLayoutView
        style={styles.box}
        titles={['Category1', 'Category2', 'Category3']}
      >
        <ScrollView
          key={1}
          style={styles.page1}
          contentContainerStyle={styles.scrollView}
          scrollEnabled
          horizontal
        >
          <View style={styles.scrollView} />
        </ScrollView>
        <View key={2} style={styles.page2} />
        <View key={3} style={styles.page2} />
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
    flex: 1,
    backgroundColor: 'yellow',
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
  scrollView: {
    flex: 0,
    width: 2000,
    backgroundColor: 'purple',
  },
});
