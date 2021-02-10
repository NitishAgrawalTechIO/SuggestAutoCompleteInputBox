import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { DebouncedTouchableOpacity } from './DebouncedOnPress';
import * as _ from '../Utility';
import { clearIcon } from '../Assets';
import * as Fonts from '../Constants/Fonts';
import * as Colors from '../Constants/Colors';

const style = StyleSheet.create({
  search: {
    height: 45,
    margin: 8,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 7,
    backgroundColor: Colors.white,
    fontSize: Fonts.normal,
    borderRadius: 8,
  },
  clearIconButton: {
    marginRight: 8,
  },
  clearIcon: {
    width: 14,
    height: 14,
  },
});

const Search = props => (
  <View style={[style.search, props.style.search]}>
    <TextInput
      ref={(input) => { props.setInputBoxRef(input); }}
      style={[style.input, props.style.input]}
      placeholder={props.searchHolderText}
      returnKeyType="done"
      underlineColorAndroid="transparent"
      value={props.value}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={props.onChangeText}
    />
    <DebouncedTouchableOpacity
      style={style.clearIconButton}
      onPress={() => props.onChangeText('')}
    >
      <Image style={style.clearIcon} source={clearIcon} />
    </DebouncedTouchableOpacity>
  </View>
);

export default Search;

Search.defaultProps = {
  onChangeText: _.noop,
  style: {},
  searchHolderText: 'Search',
  placeholderTextColor: undefined,
  value: null,
  setInputBoxRef: _.noop,
};

Search.propTypes = {
  onChangeText: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  searchHolderText: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  value: PropTypes.string,
  setInputBoxRef: PropTypes.func,
};
