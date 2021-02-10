import React, { Component } from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

class SafeAreaWithStatusBarView extends Component {
  renderAndroid() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: this.props.backgroundColor }}>
        <StatusBar backgroundColor={this.props.statusBarColor} barStyle={this.props.barStyle} />
        {this.props.children}
      </SafeAreaView>
    );
  }

  renderIOS() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: this.props.statusBarColor }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: this.props.backgroundColor }} forceInset={{ top: 'never' }}>
          <StatusBar barStyle={this.props.barStyle} />
          {this.props.children}
        </SafeAreaView>
      </React.Fragment>
    );
  }

  render() {
    return Platform.OS === 'ios' ? this.renderIOS() : this.renderAndroid();
  }
}

SafeAreaWithStatusBarView.defaultProps = {
  barStyle: null,
  statusBarColor: null,
  backgroundColor: null,
  children: [],
};

SafeAreaWithStatusBarView.propTypes = {
  barStyle: PropTypes.string,
  statusBarColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
};

export default SafeAreaWithStatusBarView;
