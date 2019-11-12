import PropTypes from 'prop-types';
import {requireNativeComponent, ViewPropTypes} from 'react-native';
var viewProps = {
  name: 'NativeImageView',
  propTypes: {
    overlayText: PropTypes.string,
    ...ViewPropTypes,
  },
};
module.exports = requireNativeComponent('NativeImageView', viewProps);
