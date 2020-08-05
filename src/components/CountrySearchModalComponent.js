import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Card, Modal, Text, Input, Divider} from '@ui-kitten/components';

import {PinIcon, AlertIcon} from './icons';

export const CountrySearchModalComponent = (props) => {
  const [value, setValue] = React.useState('');

  const [visible, setVisible] = React.useState(false);

  return (
    <Modal
      style={{marginHorizontal: 0}}
      visible={props.visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => props.setVisible(false)}>
      <Card disabled={true}>
        <Text style={styles.header} category="h3">
          Search
        </Text>
        <Divider />
        <Input
          style={styles.input}
          value={value}
          label="Country name"
          placeholder="Type first letters"
          caption="Should contain at least 3 symbols"
          accessoryRight={PinIcon}
          captionIcon={AlertIcon}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
        <Button style={styles.button} onPress={() => props.onSearch(value)}>
          Search
        </Button>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    textAlign: 'center',
    marginBottom: 4,
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    // marginBottom: 10,
  },
});
