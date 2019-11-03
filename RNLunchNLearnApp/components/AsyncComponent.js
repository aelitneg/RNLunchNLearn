import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Axios from 'axios';

export default class AsyncComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    };
  }

  // 7. Lifecycle Hooks
  async componentDidMount() {
    const response = await Axios.get('http://localhost:3000/test');

    this.setState({
      message: response.data.message
    });
  }

  render() {
    // 6a. Conditional rendering
    if (!this.state.message) {
      return null;
    }

    return (
      <View>
        <Text style={styles.text}>{'Server Response: ' + this.state.message}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});
