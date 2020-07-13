/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  SectionList,
  Button,
  ToastAndroid,
} from 'react-native';
import firebase from '../database/firebase';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Measurement = () => {
  const showToast = () => {
    firebase.auth().signOut();
    ToastAndroid.show('You have been signedout !', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Logout" onPress={() => showToast()} />
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
    backgroundColor: '#f5f5f4',
  },
  item: {
    backgroundColor: '#aaaaaa',
    padding: 20,
    marginVertical: 8,
    borderRadius: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
  },
});

export default Measurement;
