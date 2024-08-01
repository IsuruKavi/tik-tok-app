import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import RenderItem from '@/components/VideoCard';
import { Redirect } from 'expo-router';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3 Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: '4 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: '5 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722s',
    title: '6 Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1a',
    title: '7 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632a',
    title: '8 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722a',
    title: '9 Item',
  },
];



const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <RenderItem item={item} selectedIdFn={selectedId} setSelectedIdFn={setSelectedId} />}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;