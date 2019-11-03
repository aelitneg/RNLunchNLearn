import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

export default class ChilComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // 5a. Access props <- 
      <View style={this.props.style}>
        {/* 5b. Function props */}
        <Button title="COUNT" onPress={() => {this.props.onCount()}}></Button>
      </View>
    );
  }
};
