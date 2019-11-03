// 1. Single File
import React, { Component } from 'react';
// 3. React Native Primitives
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
    
    // 4. State Object
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    count = this.state.count + 1;
    
    // 4a. setState function
    this.setState({
      count: count
    });
  }

  render() {
    return (
      // 2. JSX View
      // - Everything in Primitive or Component, no HTML
      // - Attributes in '{}' syntax (mostly)
      <View style={styles.container}>
          <Text style={styles.title}>Example Component</Text>
          {/* 3a. Flex Column */}
          <View style={styles.flexRow}>
            <Text style={styles.text}>Count: </Text>
            {/* 3b. Arrays of Styles */}
            <Text style={[styles.text, styles.bold]}>{this.state.count}</Text>
          </View>
          <ChildComponent 
            // 5. props -> 
            style={styles.childStyle}
            // 5b. Function props -> 
            onCount={this.increaseCount.bind(this)}>
          </ChildComponent>
          {/* 6. Conditional rendering -> */}
          {this.state.count < 5 ? null : <AsyncComponent></AsyncComponent>}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  // 3. CSS in Javascript
  // - camelCase property names
  // - No units for numbers, property values in quotes
  // - Flex Column (3a)
  // - Arrays of Styles (3b)
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
