import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts, Colors, Metrics, AppStyles } from '../theme'

const styles = StyleSheet.create({
  mainContainer: {
    ...AppStyles.mainContainer,
    marginTop: Metrics.smallMargin,
    flexDirection: 'row',
    width: Metrics.screenWidth - Metrics.baseMargin,
  },
  searchInput: {
    flex: 5,
    height: Metrics.searchBarHeight,
    alignSelf: 'center',
    padding: Metrics.smallMargin,
    textAlign: 'left',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.instructions,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingLeft: 30,
    color: Colors.base50,
    flexDirection: 'row',
  },
  searchIcon: {
    left: Metrics.doubleBaseMargin,
    alignSelf: 'center',
    color: Colors.white,
    backgroundColor: Colors.transparent,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.baseMargin,
  },
  buttonLabel: {
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
  },
})

export default class SearchBar extends Component {
  render() {
    const { onSearch, onCancel, searchTerm } = this.props
    const onSubmitEditing = () => onSearch(searchTerm)
    return (
      <View style={styles.mainContainer}>
        <Icon
          name="search"
          size={Metrics.icons.tiny}
          style={styles.searchIcon}
        />
        <TextInput
          autoFocus
          placeholder="Search"
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent"
          style={styles.searchInput}
          value={this.props.searchTerm}
          onChangeText={onSearch}
          autoCapitalize="none"
          onSubmitEditing={onSubmitEditing}
          returnKeyType={'search'}
          autoCorrect={false}
          selectionColor={Colors.white}
        />
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.buttonLabel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
