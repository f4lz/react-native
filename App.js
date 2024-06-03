import * as React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Домашняя страница</Text>
        <Button onPress={() => console.log('Открыть меню')}>Открыть меню</Button>
        <Button onPress={() => console.log('Домашняя страница')}>Домашняя страница</Button>
    </View>
);
};

export default App;