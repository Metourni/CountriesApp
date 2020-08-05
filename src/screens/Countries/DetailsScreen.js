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

export const CountryDetailsScreen = ({navigation}) => {
  const styles = useStyleSheet(themedStyles);

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
            uri="https://restcountries.eu/data/usa.svg"
          />
          <View style={styles.nameSection}>
            <CountryInfoItemComponent style={styles.setting} value="Algeria" />
          </View>
        </Layout>
        <CountryInfoItemComponent
          style={[styles.setting, styles.newSection]}
          hint="Code"
          value="DZD"
        />
        <CountryInfoItemComponent
          style={[styles.setting]}
          hint="Numeric Code"
          value="012"
        />
        <CountryInfoItemComponent
          style={[styles.setting, styles.newSection]}
          hint="Capital"
          value="Algiers"
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="Region"
          value="Africa"
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="Sub-region"
          value="NorthAfrica"
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="Population"
          value={234234}
        />
        <CountryInfoItemComponent
          style={styles.setting}
          hint="NativeName"
          value={'الجزائر'}
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
