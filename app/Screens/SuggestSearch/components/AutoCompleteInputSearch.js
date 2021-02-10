import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { DebouncedTouchableOpacity } from '../../../Components/DebouncedOnPress';
import * as _ from '../../../Utility';
import Search from '../../../Components/Search';
import * as Fonts from '../../../Constants/Fonts';
import * as Colors from '../../../Constants/Colors';

const styles = StyleSheet.create({
  flatList: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    top: 50,
  },
  flatListItem: {
    padding: 15,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  searchNameText: {
    padding: 6,
    fontSize: Fonts.large,
    color: Colors.black,
    fontWeight: Fonts.regular,
  },
  searchNameSelectedText: {
    padding: 6,
    fontSize: Fonts.large,
    color: Colors.selectedColor,
    fontWeight: Fonts.bold,
  },
});

const removeEmptyItems = (list) => {
  const newList = [];
  if (!_.isEmpty(list)) {
    list.map((item) => {
      if (_.isObject(item) || !_.isEmpty(item)) {
        newList.push(item);
      }
      return null;
    });
  }
  return newList;
};

const getStringArray = (name, query) => {
  const position = name.indexOf(query);
  const stringArray = [];
  if (position === -1) { return name; }
  stringArray[0] = '';
  if (position !== 1) {
    stringArray[0] = name.substring(0, position - 1);
  }
  const lastIndex = position + query.length;
  stringArray[1] = name.substring(position, lastIndex);
  stringArray[2] = '';
  if (lastIndex < name.length) {
    stringArray[2] = name.substring(lastIndex, name.length);
  }
  return stringArray;
};

const renderItem = (name, query, onPress) => {
  const stringArray = getStringArray(name, query);
  return (
    <DebouncedTouchableOpacity
      style={styles.flatListItem}
      onPress={() => onPress(name)}
    >
      <Text style={styles.searchNameText}>
        {stringArray[0]}
        <Text style={styles.searchNameSelectedText}>{stringArray[1]}</Text>
        { stringArray[2] }
      </Text>
    </DebouncedTouchableOpacity>
  );
};

let textInput;

const AutoCompleteInputSearch = props => (
  <React.Fragment>
    <Search
      value={props.query}
      onChangeText={props.onSearchChange}
      setInputBoxRef={(ref) => { textInput = ref; }}
    />
    <FlatList
      style={styles.flatList}
      data={removeEmptyItems(props.searchedData)}
      keyExtractor={props.getKeyExtractor}
      extraData={props}
      renderItem={({ item }) => renderItem((props.getItemText || item), props.query,
        (value) => {
          props.onItemSelected(value);
          if (textInput) { textInput.focus(); }
        })}
    />
  </React.Fragment>
);

AutoCompleteInputSearch.defaultProps = {
  getKeyExtractor: _.noop,
  onItemSelected: _.noop,
  getItemText: undefined,
  query: '',
  searchedData: [],
};

AutoCompleteInputSearch.propTypes = {
  query: PropTypes.string,
  searchedData: PropTypes.arrayOf(PropTypes.any),
  getKeyExtractor: PropTypes.func,
  onItemSelected: PropTypes.func,
  getItemText: PropTypes.func,
  onSearchChange: PropTypes.func.isRequired,
};

export default AutoCompleteInputSearch;
