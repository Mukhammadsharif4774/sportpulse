import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import SportPulseHeader from '../components/SportPulseHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <SportPulseHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'NFL',
          '15.03 20:30',
          'Green Bay Packers \n vs Dallas Cowboys',
        )}
        {renderBroadcast(
          'Tennis',
          '16.03 18:00',
          'Novak Djokovic \n vs Andy Murray',
        )}
        {renderBroadcast(
          'MLS',
          '17.03 19:45',
          'Atlanta United \n vs New York City FC',
        )}
        {renderBroadcast('Cricket', '18.03 17:00', 'England \n vs Pakistan')}
        {renderBroadcast('Rugby', '19.03 20:00', 'England \n vs Wales')}
        {renderBroadcast('Golf', '20.03 14:00', 'US Open \n Round 3')}
        {renderBroadcast(
          'Formula 1',
          '21.03 16:00',
          'British Grand Prix \n Qualifying',
        )}
        {renderBroadcast(
          'Boxing',
          '22.03 22:00',
          'Canelo Alvarez \n vs Gennady Golovkin',
        )}
        {renderBroadcast(
          'UFC',
          '23.03 23:00',
          'Israel Adesanya \n vs Robert Whittaker',
        )}
        {renderBroadcast('Cycling', '24.03 14:30', 'Giro dItalia \n Stage 8')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.main,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '60%',
    marginLeft: 15,
    opacity: 0.7,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
    opacity: 0.9,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
