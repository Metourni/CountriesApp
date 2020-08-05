import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

// Imports: Redux Store
import {store} from './redux/store';

// Imports: Main Navigation
import {CountriesListScreen} from './screens/Countries/ListScreen';

export default () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <CountriesListScreen />
    </ApplicationProvider>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
