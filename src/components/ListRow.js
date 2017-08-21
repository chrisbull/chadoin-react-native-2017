import React, { Component } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { ApplicationStyles, UnderlayColor } from '../themes'

const styles = ApplicationStyles

export default class ListRow extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.item)
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.tableRow}
        onPress={this._onPress}
        underlayColor={UnderlayColor}
      >
        <Text style={styles.tableLabel}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    )
  }
}
