/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  SectionList,
} from 'react-native';

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

const Test = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

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

// //Working

// const DATA = [
//   {
//     id: '1',
//     title: 'Adrenal gland: <1 cm thick, 4-6 cm length',
//     description: 'Ahmed',
//   },
//   {
//     id: '2',
//     title: 'Aorta: <3 cm diameter',
//     description: 'Ahmed',
//   },
//   {
//     id: '3',
//     title: 'Appendix: on CT <6 mm caliber',
//     description: 'Ahmed',
//   },
//   {
//     id: '4',
//     title: 'Atlantodental distance: adults: <3 mm, children: <5 mm',
//     description: 'Ahmed',
//   },
//   {
//     id: '5',
//     title: 'Azygous vein: on erect chest x-ray <10 mm diameter',
//     description: 'Ahmed',
//   },
//   {
//     id: '6',
//     title: 'Bladder wall: <3 mm (well-distended state)',
//     description: 'Ahmed',
//   },
//   {
//     id: '7',
//     title: 'Boehler angle: 20-40o',
//   },
//   {
//     id: '8',
//     title: 'Capitolunate angle: <30o',
//   },
//   {
//     id: '9',
//     title: 'Carinal angle: <60-70o',
//   },
//   {
//     id: '10',
//     title: 'Colon: lumen: <5 cm, wall: <3 mm',
//   },
//   {
//     id: '11',
//     title:
//       'Common bile duct: <7 mm and add 1 mm for each decade over age of 60 years, up to 10 mm postcholecystectomy',
//   },
//   {
//     id: '12',
//     title:
//       'Diaphragm (right dome is usually higher than left): difference between right and left: <3 cm',
//   },
//   {
//     id: '13',
//     title:
//       'Endometrial thickness: premenopausal: 3-15 mm, postmenopausal: <6 mm',
//   },
//   {
//     id: '14',
//     title: 'Esophagus wall: <3 mm (with distended lumen)',
//   },
//   {
//     id: '15',
//     title: 'Gallbladder wall: <3 mm (well-distended)',
//   },
//   {
//     id: '16',
//     title: 'Heart (cardiothoracic ratio): <0.55',
//   },
//   {
//     id: '17',
//     title: 'Inferior vena cava: <28 mm',
//   },
//   {
//     id: '18',
//     title:
//       'Internal carotid artery: peak systolic velocity (PSV): <125 cm/s end-diastolic velocity (EDV): <40 cm/s',
//   },
//   {
//     id: '19',
//     title: 'Kidneys : 8-10 cm x 4-6 cm',
//   },
//   {
//     id: '20',
//     title: 'Liver span: <15 cm',
//   },
//   {
//     id: '21',
//     title:
//       'Lymph nodes mediastinal: <10 mm in short axis retrocrural: <6 mm in short axis',
//   },
//   {
//     id: '22',
//     title: 'Ovarian follicle: <2.5-3 cm',
//   },
//   {
//     id: '23',
//     title: 'Ovaries: volume premenopausal: <18 mL postmenopausal: <8 mL',
//   },
//   {
//     id: '24',
//     title: 'Paraspinal lines: left: <10 mm wide right: <3 mm wide',
//   },
//   {
//     id: '25',
//     title: 'Paratracheal stripe: <5 mm',
//   },
//   {
//     id: '26',
//     title: 'Pancreatic duct head: 3.5 mm body: 2.5 mm tail: 1.5 mm',
//   },
//   {
//     id: '27',
//     title: 'Portal vein: <13 mm diameter',
//   },
//   {
//     id: '28',
//     title:
//       'Prevertebral soft tissue thickness (lateral c-spine x-ray): 7 mm at C2 2 cm at C7 easiest way to remember is "7 at 2 and 2 at 7"',
//   },
//   {
//     id: '29',
//     title: 'Prostate volume: <25-30 mL',
//   },
//   {
//     id: '30',
//     title:
//       'Pulmonary artery descending branch of right pulmonary artery: <16 mm (males), <15 mm (females), main pulmonary artery: <29 mm',
//   },
//   {
//     id: '31',
//     title: 'Rectum: wall thickness <5 mm',
//   },
//   {
//     id: '32',
//     title: 'Scapholunate angle: 30-60o',
//   },
//   {
//     id: '33',
//     title: 'Small bowel lumen: <3 cm, wall: <3 mm',
//   },
//   {
//     id: '34',
//     title: 'Spleen: <12 cm',
//   },
//   {
//     id: '35',
//     title: 'Trachea chest x-ray: <25 mm (males), <21 mm (females)',
//   },
//   {
//     id: '36',
//     title: 'Ureter: 30-34 cm long, 2-8 mm diameter',
//   },
//   {
//     id: '37',
//     title:
//       'Uterus prepubescent: length ≤3 cm, diameter ~1 cm, nulliparous: length ≤8 cm, diameter ~8 cm, multiparous: length ≤9.5 cm, diameter ~5.5 cm, postmenopausal: length ≤6 cm, diameter ~2 cm',
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const Test = () => {
//   const renderItem = ({item}) => <Item title={item.title} />;

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#eaf1f9',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },

//   title: {
//     fontSize: 14,
//   },
// });

export default Test;
