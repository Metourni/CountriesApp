import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  ListItem,
  Spinner,
  List,
  Text,
  TopNavigationAction,
} from '@ui-kitten/components';
import {SvgUri} from 'react-native-svg';

import countriesActions from '../../redux/countries/actions';

import {SearchIcon, RefreshIcon} from '../../components/icons';
import {CountrySearchModalComponent} from '../../components/CountrySearchModalComponent';

export const CountriesListScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = React.useState(false);

  const {loading, error, list} = useSelector((state) => state.countries);

  const fetchCountries = () => {
    dispatch({type: countriesActions.GET_ALL});
  };

  const fetchCountriesByName = (value) => {
    dispatch({type: countriesActions.SEARCH_BY_NAME, payload: {q: value}});
  };

  useEffect(() => {
    // load data on component mount
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateDetails = (index) => {
    const data = {
      country: list[index],
    };
    navigation.navigate('CountryDetails', data);
  };

  const renderItemButton = (index) => (props) => (
    <Button size="tiny" onPress={() => navigateDetails(index)}>
      Detail
    </Button>
  );

  const renderItemIcon = (imageSrc) => (props) => {
    return <SvgUri width="20%" height={40} uri={imageSrc} />;
  };

  const renderItem = ({item, index}) => (
    <ListItem
      title={item.name}
      description={item.capital}
      // accessoryLeft={renderItemIcon(item.flag)}
      accessoryRight={renderItemButton(index)}
    />
  );

  const SearchAction = () => (
    <TopNavigationAction icon={SearchIcon} onPress={() => setShowModal(true)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Countries List"
        alignment="center"
        accessoryRight={SearchAction}
      />
      <Divider />
      <React.Fragment>
        {loading ? (
          <Layout style={styles.spinnerLayout}>
            <Spinner style={styles.spinner} />
          </Layout>
        ) : null}
        {!loading && list && !error ? (
          <List data={list} renderItem={renderItem} />
        ) : null}
        {!loading && error ? (
          <Layout style={styles.container}>
            <Text style={styles.text} category="s1">
              {error}
            </Text>
            <Button
              style={styles.likeButton}
              accessoryLeft={RefreshIcon}
              onPress={fetchCountries}>
              Try again
            </Button>
          </Layout>
        ) : null}
      </React.Fragment>
      <CountrySearchModalComponent
        visible={showModal}
        onSearch={(q) => {
          fetchCountriesByName(q);
          setShowModal(false);
        }}
        setVisible={setShowModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'stretch',
    // paddingTop: 100,
  },
  spinnerLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    // marginTop: 40,
  },
  list: {
    // flex:1
  },

  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
    marginHorizontal: 30,
  },
  imageItem: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});
