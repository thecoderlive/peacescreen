import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

import DetailList from './DetailList'

const peaceListItem = ({ item }) => (
<View style={styles.peace_list_item}>
<Text style={styles.ready_title}>{item.ready_title}</Text>
<Text style={styles.about_time}>{item.about_time}</Text>
<DetailList item={item.detail_list}/>
</View>
  );

const PeaceList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.peace_list}
    data={item}
    renderItem={peaceListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default PeaceList;

const styles = StyleSheet.create({
    'ready_title': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_time': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});