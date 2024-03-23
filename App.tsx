import React from 'react';

// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Toast from 'react-native-toast-message';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
//
// import MainNavigator from './src/navigation';
// import {persistor, store} from './src/reducers/store';
// import {setTopLevelNavigator} from './src/navigation/navigationsServices.ts';
import Home from './src/Screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {persistor, store} from './src/reducers/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = (): React.JSX.Element => {
  const setNavigationRef = (navigatorRef: any) => {
    // setTopLevelNavigator(navigatorRef);
  };

  // <SafeAreaProvider>
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <MainNavigator refer={setNavigationRef} />
  //
  //       <Toast />
  //     </PersistGate>
  //   </Provider>
  // </SafeAreaProvider>

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
