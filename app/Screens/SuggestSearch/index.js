
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import * as _ from '../../Utility';
import * as API from '../../Api/Mock';
import SafeAreaWithStatusBarView from '../../Components/SafeAreaWithStatusBarView';
import AutoCompleteInputSearch from './components/AutoCompleteInputSearch';
import * as Colors from '../../Constants/Colors';

export const SuggestSearchConst = {
  SuggestSearch: 'SuggestSearch',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
});

const SuggestSearch = () => {
  const [query, setQuery] = useState('');
  const [searchedData, setSearchedData] = useState([]);

  const fetchData = (queryText) => {
    setQuery(queryText);
    if (_.isEmpty(queryText)) {
      setSearchedData([]);
      return;
    }
    API.getSuggestions(queryText)
      .then((res) => {
        setSearchedData([]);
        setSearchedData(res);
      })
      .catch(() => {
        setSearchedData([]);
      });
  };

  return (
    <SafeAreaWithStatusBarView statusBarColor={Colors.lightStatusBar} barStyle="light-content">
      <View style={styles.container}>
        <AutoCompleteInputSearch
          query={query}
          searchedData={searchedData}
          onSearchChange={fetchData}
          onItemSelected={selected => fetchData(`${selected} `)}
        />
      </View>
    </SafeAreaWithStatusBarView>
  );
};

export default SuggestSearch;
