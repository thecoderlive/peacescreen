import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'



const detailListItem = ({ item }) => (
<View style={styles.detail_list_item}>
<Text style={styles.serial_number}>{item.serial_number}</Text>
<Text style={styles.license_title}>{item.license_title}</Text>
<Text style={styles.about_license}>{item.about_license}</Text>
</View>
  );

const DetailList = ({ item }) => (
<FlatList
    style={styles.detail_list}
    data={item}
    renderItem={detailListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default DetailList;

const styles = StyleSheet.create({
    'serial_number': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'license_title': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_license': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});