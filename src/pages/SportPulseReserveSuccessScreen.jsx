import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
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

      <Text style={styles.text}>Спасибо за резерв!</Text>

      <Image
        source={require('../assets/success_icon.png')}
        style={styles.image}
      />

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
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 40,
    marginTop: '25%',
    paddingVertical: 20,
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
});
