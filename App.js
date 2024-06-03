import * as React from 'react';
import TasksScreen from './pages/TasksScreen';
import SettingsScreen from './pages/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TasksStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Домашняя страница" component={HomeScreen} />
  </HomeStack.Navigator>
);

const TasksStackScreen = () => (
  <TasksStack.Navigator>
    <TasksStack.Screen name="Настройки" component={SettingsScreen} />
  </TasksStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
      <TasksStack.Screen name="Задачи" component={TasksScreen} />
  </SettingsStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
);
};

/** Версия с Навигацией по табам */

// const App = () => {
//   return (
//     <NavigationContainer>
//       <TabsNavigation/>
//     </NavigationContainer>
// );
// };

const DrawerNavigation = () => {
    return (
      <Drawer.Navigator initialRouteName="Домашняя страница">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={TasksStackScreen} />
      </Drawer.Navigator>
    )
};


const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Домашняя страница" component={HomeStackScreen} />
      <Tab.Screen name="Страница задач" component={TasksStackScreen} />
      <Tab.Screen name="Настройки" component={SettingsStackScreen} />
  </Tab.Navigator>
  )
  
}


const HomeScreen = ({navigation}) => (
  <View>
    <Text>Домашняя страница</Text>
    <Button onPress={() => navigation.openDrawer()}>Открыть меню</Button>
    <Button onPress={() => navigation.closeDrawer()}>Домашняя страница</Button>
  </View>
);

export default App;