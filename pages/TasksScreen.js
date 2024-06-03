import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => (
  <View>
    <Text>
      Список задач
    </Text>
    <Button title="Вернуться назад" onPress={() => navigation.goBack()} />
  </View>
);

export default ProfileScreen;