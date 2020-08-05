import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  ListItem,
  Avatar,
  List,
} from '@ui-kitten/components';

import countriesActions from '../../redux/countries/actions';
import {Image} from 'react-native-svg';

export const CountriesListScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {loading, error, list} = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch({type: countriesActions.GET_ALL});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const renderItemButton = (props) => <Button size="tiny">Detail</Button>;

  const renderItemIcon = (imageSrc) => (props) => {
    return <Image style={styles.imageItem} source={imageSrc} />;
  };

  const renderItem = ({item, index}) => (
    <ListItem
      title={item.name}
      description={item.capital}
      accessoryLeft={renderItemIcon(item.flag)}
      accessoryRight={renderItemButton}
    />
  );

  return (
    <SafeAreaView>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout>
        <Image style={styles.imageItem} source="https://restcountries.eu/data/dza.svg" />
        <List style={styles.container} data={list} renderItem={renderItem} />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 192,
  },
  imageItem: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});
