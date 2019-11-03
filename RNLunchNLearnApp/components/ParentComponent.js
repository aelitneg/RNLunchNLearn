import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ChildComponent from './ChildComponent';
import AsyncComponent from './AsyncComponent';

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    count = this.state.count + 1;
    
    this.setState({
      count: count
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Example Component</Text>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Count: </Text>
            <Text style={[styles.text, styles.bold]}>{this.state.count}</Text>
          </View>
          <ChildComponent 
            style={styles.childStyle}
            onCount={this.increaseCount.bind(this)}>
          </ChildComponent>
          {this.state.count < 5 ? null : <AsyncComponent></AsyncComponent>}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
  },
  flexRow: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 24
  },
  bold: {
    fontWeight: 'bold'
  },
  childStyle: {
    margin: 30
  }
});
