import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Gas Price Watcher
      </Text>
      <Text style={styles.paragraph}>
        Prices and News
      </Text>
      
        <a href="https://toronto.citynews.ca/toronto-gta-gas-prices/" target="_blank">
        <img alt="Qries" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/CityNews_logo.svg/1280px-CityNews_logo.svg.png"
        width="" height="70"></img>
        </a>
      
      <a href="https://globalnews.ca/tag/gas-prices/" target="_blank">
        <img alt="Qries" src="https://uwaterloo.ca/green-energy-pollution-control-research-lab/sites/ca.green-energy-pollution-control-research-lab/files/uploads/images/untitled.png"
        width="330" height="70"></img>
        </a>
        <Text style={styles.paragraph}>
        Nearby Gas Stations
      </Text>
       <a href=" https://www.esso.ca/en-ca/find-station/" target="_blank">
       <img alt="Qries" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Esso_textlogo.svg/800px-Esso_textlogo.svg.png"
        width="300" height="200"></img>
        </a>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
