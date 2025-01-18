import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import SportPulseHeader from '../components/SportPulseHeader';
import SportPulseComponent from '../components/SportPulseComponent';
import BackgroundImage from '../assets/background.png';
export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'SportPulseHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <SportPulseHeader />

      <Text style={styles.text}>Спасибо за {'\n'} заказ!</Text>

      <Image
        source={require('../assets/success_icon.png')}
        style={styles.image}
      />

      <View style={styles.qrContainer}>
        <QRCode
          value="https://sportsandsocial.com/dc/?utm_source=ppc&keyword=&matchtype=&network=x&devicemodel=&loc_interest_ms=9008177&gad_source=1&gclid=Cj0KCQiA1p28BhCBARIsADP9HrMiZq78ySTe6aGd1VpghTFcFacaJJB8trLdcPGXG7v97a_0ybtPM8IaAsNjEALw_wcB"
          size={Dimensions.get('window').width / 2.5}
          color={COLORS.main}
        />
      </View>

      <SportPulseComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 40,
    marginTop: '15%',
    paddingVertical: 15,
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
});
