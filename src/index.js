import React from 'react';
import {Provider} from 'react-redux';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

// Imports: Redux Store
import {store} from './redux/store';

// Imports: Main Navigation
import {AppNavigator} from './navigation';
import {CountriesListScreen} from './screens/Countries/ListScreen';
// import {CountryDetailsScreen} from './screens/Countries/DetailsScreen';

export default () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </Provider>
);
