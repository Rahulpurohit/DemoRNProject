import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from './configApp';
import AppContainer from './router';
import {Splash} from './container/Splash/Splash';
const {persistor, store} = configureStore();

// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

function App(props) {
  useEffect(() => {
    if (__DEV__) {
      console.disableYellowBox = true;
    }
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <AppContainer
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getActiveRouteName(currentState);
            const prevScreen = getActiveRouteName(prevState);
            // if (prevScreen !== currentScreen) {
            // 	// the line below uses the  Analytics tracker
            // 	// change the tracker here to use other Mobile analytics SDK.
            // 	tracker.trackScreenView(currentScreen);
            // }
          }}
        />
      </PersistGate>
    </Provider>
  );
}

export default MyApp = App;
