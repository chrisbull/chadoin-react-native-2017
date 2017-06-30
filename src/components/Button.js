import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Colors } from '../utils';

function getStyles(props, state) {
  const styles = StyleSheet.create({
    container: {
      ...props.style,
    },
    highlight: {
      backgroundColor: props.color ? Colors[props.color] : Colors.blue,
      borderRadius: 45,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 30,
      paddingRight: 30,
    },
    label: {
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

  return styles;
}

export default class Button extends Component {
  propTypes: {
    title: PropTypes.String.isRequired,
  };

  render() {
    const { title, onPress } = this.props;

    const styles = getStyles(this.props, this.state);

    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.highlight} onPress={onPress}>
          <Text style={styles.label}>
            {title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
