import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  StyleService,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import {SvgUri} from 'react-native-svg';

import {CountryInfoItemComponent} from '../../components/CountryInfoItemComponent';
import {PinIcon, BackIcon} from '../../components/icons';

export const CountryDetailsScreen = ({route, navigation}) => {
  const styles = useStyleSheet(themedStyles);

  const {country} = route.params;

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopNavigation
        title="Country details"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Layout style={styles.topSection} level="1">
          <View style={styles.nameSection}>
            <Text style={styles.countryName} category="h4">
              {country.name}
            </Text>
            <View style={styles.capitalContainer}>
              <PinIcon style={{width: 20, height: 20}} fill="#8F9BB3" />
              <Text style={styles.capital} category="s1">
                {country.capital}
              </Text>
            </View>
          </View>
        </Layout>
        <CountryInfoItemComponent
          style={[styles.setting, styles.newSection]}
          hint="Code"
          value={country.alpha2Code}
        />
        <CountryInfoItemComponent
          style={[styles.setting]}
          hint="Numeric Code"
          value={country.numericCode}
        />
        <CountryInfoItemComponent
          style={[styles.setting, styles.newSection]}
          hint="Capital"
          value={country.capital}
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="Region"
          value={country.region}
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="Sub-region"
          value={country.subregion}
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="Population"
          value={country.population}
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="Native Name"
          value={country.nativeName}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: 'background-basic-color-2',
  },
  contentContainer: {
    paddingBottom: 24,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  nameSection: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  countryName: {
    paddingVertical: 10,
  },
  capitalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  capital: {
    // marginHorizontal: 8,
  },
  setting: {
    padding: 16,
  },
  newSection: {
    marginTop: 24,
  },
});
