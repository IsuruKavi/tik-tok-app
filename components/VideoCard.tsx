import { View, Text, TouchableOpacity, StatusBar,StyleSheet } from 'react-native'
import React from 'react'

type ItemData = {
  id: string;
  title: string;
};
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);
const RenderItem = ({item,selectedIdFn,setSelectedIdFn}: {item: ItemData,selectedIdFn:string | undefined,setSelectedIdFn:(id:string)=>void}) => {

    const backgroundColor = item.id === selectedIdFn ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedIdFn ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedIdFn(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
 
}
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

export default RenderItem