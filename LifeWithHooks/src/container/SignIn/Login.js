import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import {SmartTextInput as TextInput} from '../../component/SmartTextInput/SmartTextInput';

export default function Login(props) {
  useEffect(() => {
    props.isLogin && props.navigation.navigate('App');
  });

  const validations = {
    email: 'email',
    password: ['minLength:6', 'doesNotMatch:password'],
  };

  const handleSubmit = values => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve();
        props.getUser(values);
      }, 500),
    );
  };
  const {onChange, onSubmit, onValidate, error} = props;
  const {email, password} = props.validationReducer.fields;
  return (
    <View style={styles.root}>
      <View style={styles.Background}>
        <ImageBackground
          style={styles.rect}
          source={require('../../assets/images/Gradient_LZGIVfZ.png')}>
          <ScrollView>
            <View style={styles.LogoColumn}>
              <View style={styles.Logo}>
                <View style={styles.endWrapperFiller} />
                <View style={styles.text3Column}>
                  <Text style={styles.text3}>Hello Hooks</Text>
                  <View style={styles.rect7} />
                </View>
              </View>
              <View style={styles.Form}>
                <View style={styles.UsernameColumn}>
                  <View style={styles.Username}>
                    <EvilIconsIcon name="user" style={styles.icon2} />
                    <TextInput
                      placeholder="email"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.UsernameInput}
                      name="email"
                      onChange={onChange}
                      onValidate={onValidate}
                      validateOn="blur"
                      validation={validations.email}
                      labelTitle={'Email'}
                      placeHolder={'Email'}
                      keyboardType={'email-address'}
                      {...email}
                    />
                  </View>
                  <View style={styles.Password}>
                    <EvilIconsIcon name="lock" style={styles.icon2} />
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,1)"
                      style={styles.PasswordInput}
                      name="password"
                      onChange={onChange}
                      onValidate={onValidate}
                      validateOn="blur"
                      validation={validations.password}
                      labelTitle={'Password'}
                      {...password}
                      secureTextEntry={true}
                      keyboardType={'email-address'}
                    />
                  </View>
                </View>

                <Text style={styles.errorText}>{error}</Text>

                <TouchableOpacity
                  onPress={onSubmit(validations, handleSubmit)}
                  style={styles.button}>
                  <Text style={styles.text2}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.LogoColumnFiller} />
          </ScrollView>

          <View style={styles.FooterTexts}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}
              style={styles.button2}>
              <View style={styles.CreateAccountFiller} />
              <Text style={styles.CreateAccount}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.button2Filler} />
            <Text style={styles.NeedHelp}>Need Help?</Text>
          </View>
        </ImageBackground>
      </View>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  Background: {
    flex: 1,
  },
  rect: {
    opacity: 0.69,
    flex: 1,
  },
  Logo: {
    width: '100%',
    height: 111,
    alignSelf: 'center',
  },
  endWrapperFiller: {
    flex: 1,
  },
  text3: {
    flex: 1,
    color: 'rgba(255,255,255,1)',
    fontSize: 40,
    marginBottom: 4,
  },
  rect7: {
    height: 3,
    backgroundColor: '#25cdec',
  },
  text3Column: {
    width: '100%',
    flex: 1,

    marginBottom: 6,
    marginLeft: 2,
    marginRight: 3,
  },
  Form: {
    marginTop: 59,
  },
  Username: {
    height: 70,
    backgroundColor: 'rgba(251,247,247,0.25)',
    opacity: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 33,
    marginLeft: 20,
    alignSelf: 'center',
  },
  UsernameInput: {
    color: 'rgba(255,255,255,1)',
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 4,
  },
  Password: {
    height: 59,
    backgroundColor: 'rgba(253,251,251,0.25)',
    opacity: 1,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 27,
  },
  PasswordInput: {
    color: 'rgba(255,255,255,1)',
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 4,
  },
  UsernameColumn: {},
  UsernameColumnFiller: {
    flex: 1,
  },
  button: {
    minHeight: 59,
    backgroundColor: 'rgba(31,178,204,1)',
    borderRadius: 5,
    justifyContent: 'center',
  },
  errorText: {
    color: 'rgba(255,90,90,1)',
    alignSelf: 'center',
    margin: 10,
  },
  text2: {
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  LogoColumn: {
    marginTop: 90,
    marginLeft: 41,
    marginRight: 41,
  },
  LogoColumnFiller: {
    flex: 1,
  },
  FooterTexts: {
    height: 14,
    flexDirection: 'row',
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36,
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: 'flex-end',
  },
  ErrorContainer: {
    flex: 1,
  },
  CreateAccountFiller: {
    flex: 1,
  },
  CreateAccount: {
    color: 'rgba(255,255,255,0.5)',
  },
  button2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  NeedHelp: {
    color: 'rgba(255,255,255,0.5)',
    alignSelf: 'flex-end',
  },
});
