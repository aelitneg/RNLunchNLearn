import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import ParentComponent from './components/ParentComponent';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ParentComponent></ParentComponent>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  }
});


