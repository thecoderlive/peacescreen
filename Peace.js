import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import PeaceList from './PeaceList'

const Peace = () => (
<ScrollView style={styles.peace} showsVerticalScrollIndicator={false}>
<PeaceList item={item.peace_list}/>
</ScrollView>
)

export default Peace;

const styles = StyleSheet.create({
    
});