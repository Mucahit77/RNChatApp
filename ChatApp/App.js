
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Pages from "./src/Pages/Pages";


class App extends Component {
  render() {
    return (
        <Pages/>
    );
  }
}

export default App;
