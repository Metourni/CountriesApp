import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  StyleService,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import {SvgUri} from 'react-native-svg';

import {CountryInfoItemComponent} from '../../components/CountryInfoItemComponent';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

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
    <SafeAreaView>
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
          <SvgUri
            width="80"
            height="80"
            uri={country.flag}
          />
          <View style={styles.nameSection}>
            <CountryInfoItemComponent style={styles.setting} value={country.name} />
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
  container: {
    // flex: 1,
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
  },
  setting: {
    padding: 16,
  },
  newSection: {
    marginTop: 24,
  },
});
