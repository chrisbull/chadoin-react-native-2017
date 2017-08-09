import React, { Component } from 'react'
import { FlatList } from 'react-native'
import TableSeparator from '../Components/TableSeparator'
import ListRow from '../Components/ListRow'
import { ApplicationStyles } from '../Themes'
const styles = ApplicationStyles

export default class MyFlatList extends Component {
  static defaultProps = {
    data: [],
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({ item }) => {
    return (
      <ListRow
        onPressItem={this.props.onPressItem}
        title={item.title}
        item={item}
      />
    )
  }

  render() {
    return (
      <FlatList
        ItemSeparatorComponent={({ highlighted }) =>
          <TableSeparator highlighted={highlighted} />}
        style={styles.mainContainer}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}
