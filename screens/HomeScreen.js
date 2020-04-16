import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';

import { Button, Dimensions, FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { Ionicons } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard'
import { ScrollView } from 'react-native-gesture-handler';
import SubscribeCard from '../components/SubscribeCard'

const { width, height } = Dimensions.get('screen')

const data = [
  {
    imageurl: "https://freesvg.org/img/healthy.png"
  }, {
    imageurl: "https://freesvg.org/img/healthy.png"
  },
  {
    imageurl: "https://freesvg.org/img/healthy.png"
  }
]




export default function HomeScreen() {
  const carts = useSelector(state => state.items);
  const dispatch = useDispatch();


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Subscription banner */}
      <ScrollView style={styles.subContainer} contentContainerStyle={{ padding: 4 }} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => String(index)}>
        {
          data.map((item, index) => <SubscribeCard item={item} />)
        }
      </ScrollView>


      {/* Location */}
      <View style={{ flex: 2, }}>
        <View style={{ margin: 6 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Most selling items{'\n'}growing nearby</Text>
          <View style={styles.pinContainer}>
            <Ionicons name="md-pin" size={24} color="#62A531" />
            <Text style={{ marginLeft: 6 }}>2690, 31th main road, HSR Layout</Text>
          </View>
        </View>

        {/* Items near location */}
        <ScrollView style={{ flex: 1, marginTop: 6 }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} showsVerticalScrollIndicator={false} keyExtractor={(item, index) => String(index)}>
          {
            carts.map((item, index) => <ItemCard item={item} />)
          }
        </ScrollView>
      </View>



    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: { flex: 1, marginTop: 6 },
  pinContainer: { marginTop: 10, flexDirection: 'row', alignItems: 'center' }
});
