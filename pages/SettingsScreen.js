import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => (
  <View>
    <Text>
      Настройки
    </Text>
    <Button title="Вернуться назад" onPress={() => navigation.goBack()} />
  </View>
);

export default SettingsScreen;