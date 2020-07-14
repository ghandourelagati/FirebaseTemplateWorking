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
    title: 'Adrenal gland',
    data: ['<1 cm thick', '4-6 cm length'],
  },
  {
    title: 'Aorta',
    data: ['<3 cm diameter'],
  },
  {
    title: 'Appendix',
    data: ['on CT <6 mm caliber'],
  },
  {
    title: 'Atlantodental distance',
    data: ['adults: <3 mm', 'children: <5 mm'],
  },
  {
    title: 'Azygous vein',
    data: ['on erect chest x-ray <10 mm diameter'],
  },
  {
    title: 'Bladder wall',
    data: ['<3 mm (well-distended state)'],
  },
  {
    title: 'Boehler angle',
    data: ['20-40o'],
  },
  {
    title: 'Capitolunate angle',
    data: ['<30o'],
  },
  {
    title: 'Carinal angle',
    data: ['<60-70o'],
  },
  {
    title: 'Colon',
    data: ['lumen: <5 cm', 'wall: <3 mm'],
  },
  {
    title: 'Common bile duct',
    data: [
      '<7 mm and add 1 mm for each decade over age of 60 years',
      'up to 10 mm postcholecystectomy',
    ],
  },
  {
    title: 'Diaphragm (right dome is usually higher than left)',
    data: ['difference between right and left: <3 cm'],
  },
  {
    title: 'Endometrial thickness',
    data: ['premenopausal: 3-15 mm', 'postmenopausal: <6 mm'],
  },
  {
    title: 'Esophagus wall',
    data: ['<3 mm (with distended lumen)'],
  },
  {
    title: 'Gallbladder wall',
    data: ['<3 mm (well-distended)'],
  },
  {
    title: 'Heart (cardiothoracic ratio)',
    data: ['<0.55'],
  },
  {
    title: 'Inferior vena cava',
    data: ['<28 mm'],
  },
  {
    title: 'Internal carotid artery',
    data: [
      'peak systolic velocity (PSV): <125 cm/s',
      'end-diastolic velocity (EDV): <40 cm/s',
    ],
  },
  {
    title: 'Kidneys',
    data: ['8-10 cm x 4-6 cm'],
  },
  {
    title: 'Liver span',
    data: ['<15 cm'],
  },
  {
    title: 'Lymph nodes',
    data: [
      'mediastinal: <10 mm in short axis',
      'retrocrural: <6 mm in short axis',
    ],
  },
  {
    title: 'Ovarian follicle',
    data: ['<2.5-3 cm'],
  },
  {
    title: 'Ovaries',
    data: ['volume premenopausal: <18 mL', 'postmenopausal: <8 mL'],
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
