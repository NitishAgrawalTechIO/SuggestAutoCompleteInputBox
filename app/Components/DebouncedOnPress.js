import React, { PureComponent } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '../Utility';

const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const withDebouncedOnPress = (WrappedComponent) => {
  class DebouncedOnPress extends PureComponent {
    onPress = debounce(this.props.onPress, this.props.debounceWait, this.props.debounceOptions)

    render() {
      const {
        onPress, children, debounceOptions, debounceWait, debouncedFuncParameter,
        ...wrappedComponentProps
      } = this.props;

      return (
        <WrappedComponent
          {...wrappedComponentProps}
          onPress={() => this.onPress(debouncedFuncParameter)}
        >
          {children}
        </WrappedComponent>
      );
    }
  }

  DebouncedOnPress.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    debounceOptions: PropTypes.objectOf(PropTypes.any),
    debounceWait: PropTypes.number,
    debouncedFuncParameter: PropTypes.objectOf(PropTypes.any),
  };
  DebouncedOnPress.defaultProps = {
    onPress: noop,
    children: null,
    debounceOptions: { leading: true, trailing: false },
    debounceWait: 500,
    debouncedFuncParameter: undefined,
  };

  return DebouncedOnPress;
};
export default withDebouncedOnPress;

export const DebouncedTouchableOpacity = withDebouncedOnPress(TouchableOpacity);
export const DebouncedTouchableWithoutFeedback = withDebouncedOnPress(TouchableWithoutFeedback);
