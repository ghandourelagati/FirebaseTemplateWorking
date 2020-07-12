/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

export default class Measurement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.menuArray = [
      'Adrenal gland: <1 cm thick, 4-6 cm length',
      'Aorta: <3 cm diameter',
      'Appendix: on CT <6 mm caliber',
      'Atlantodental distance: adults: <3 mm, children: <5 mm',
      'Azygous vein: on erect chest x-ray <10 mm diameter',
      'Bladder wall: <3 mm (well-distended state)',
      'Boehler angle: 20-40o',
      'Capitolunate angle: <30o',
      'Carinal angle: <60-70o',
      'Colon: lumen: <5 cm, wall: <3 mm',
      'Common bile duct: <7 mm and add 1 mm for each decade over age of 60 years, up to 10 mm postcholecystectomy',
      'Diaphragm (right dome is usually higher than left): difference between right and left: <3 cm',
      'Endometrial thickness: premenopausal: 3-15 mm, postmenopausal: <6 mm',
      'esophagus wall: <3 mm (with distended lumen)',
      'Gallbladder wall: <3 mm (well-distended)',
      'heart (cardiothoracic ratio): <0.55',
      'Inferior vena cava: <28 mm',
      'Internal carotid artery: peak systolic velocity (PSV): <125 cm/s, end-diastolic velocity (EDV): <40 cm/s',
      'Kidneys : 8-10 cm x 4-6 cm',
      'Liver span: <15 cm',
      'Lymph nodes mediastinal: <10 mm in short axis, retrocrural: <6 mm in short axis',
      'Ovarian follicle: <2.5-3 cm',
      'Ovaries: volume premenopausal: <18 mL, postmenopausal: <8 mL',
      'Paraspinal lines: left: <10 mm wide, right: <3 mm wide',
      'Paratracheal stripe: <5 mm',
      'Pancreatic duct head: 3.5 mm,body: 25 mm, tail: 1.5 mm',
      ' portal vein: <13 mm diameter',
      'Prevertebral soft tissue thickness (lateral c-spine x-ray): 7 mm at C2, 2 cm at C7, easiest way to remember is "7 at 2 and 2 at 7',
      'Prostate volume: <25-30 mL',
      'Pulmonary artery descending branch of right pulmonary artery: <16 mm (males) <15 mm (females) main pulmonary artery: <29 mm',
      ' Rrectum: wall thickness <5 mm',
      'Scapholunate angle: 30-60o',
      'Small bowel lumen: <3 cm, wall: <3 mm',
      'Spleen: <12 cm',
      'Splenic vein: <10 mm diameter',
      'testis vein: <2 mm diameter size: <5 x 3 x 3 cm (volume: 12.5-19 mL)',
      'Thyroid: <2 cm anteroposterior dimension',
      'trachea: chest x-ray: <25 mm (males) <21 mm (females)',
      'ureter: 30-34 cm long, 2-8 mm diameter',
      'Uterus prepubescent: length ≤3 cm, diameter ~1 cm nulliparous: length ≤8 cm, diameter ~8 cm multiparous: length ≤9.5 cm, diameter ~5.5 cm postmenopausal: length ≤6 cm, diameter ~2 cm',
      'Uterine cervix: diameter <3 cm',
    ];
  }

  render() {
    return (
      <View>
        <Text style={styles.TitleStyle}></Text>

        <ScrollView>
          {this.menuArray.map((item, key) => (
            <TouchableOpacity key={key}>
              <Text style={styles.TextStyle}> {item} </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 2,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  TextStyle: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
  },
  BodyStyle: {
    marginTop: 25,
    backgroundColor: '#BF3FBF',
  },
  button: {
    backgroundColor: '#BF3FBF',
  },
});
