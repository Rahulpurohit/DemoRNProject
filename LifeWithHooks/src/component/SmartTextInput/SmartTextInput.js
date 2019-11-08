import React from 'react';
import {View, TextInput, Text} from 'react-native';
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';
import getStyle from './style';
export function SmartTextInput(props) {
  const handleDebouncedInput =
    props.validateOn === 'debouncedInput'
      ? debounce(handleValidate.bind(this), 300)
      : noop;

  const handleChange = text => {
    const {name} = props;
    props.onChange(name, text.nativeEvent.text);
    handleDebouncedInput();
    handleBlur();
  };
  const handleBlur = () => {
    if (props.validateOn === 'blur') {
      return handleValidate();
    }
  };
  const handleValidate = () => {
    const {name, onValidate, validation} = props;
    return onValidate(name, validation);
  };
  const styles = getStyle();
  const {labelTitle, placeHolder} = props;
  const {...extraProps} = props;
  const {errors} = props;
  const hasErrors = errors && errors.length > 0;
  return (
    <View style={styles.container}>
      <TextInput
        blurOnSubmit
        {...extraProps}
        style={[extraProps.style]}
        multiline={false}
        placeHolder={placeHolder}
        onChange={handleChange.bind(this)}
        onSubmitEditing={handleBlur.bind(this)}
        underlineColorAndroid={'transparent'}
        keyboardAppearance={'light'}
      />
      {hasErrors &&
        errors.map(e => <Text style={styles.errorMessage}>{e}</Text>)}
    </View>
  );
}
