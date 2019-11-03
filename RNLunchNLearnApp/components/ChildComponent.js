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
      <View style={this.props.style}>
        <Button title="COUNT" onPress={() => {this.props.onCount()}}></Button>
      </View>
    );
  }
};
