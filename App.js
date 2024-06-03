import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const DataFetchingComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View>
            <Text>Data</Text>
            <FlatList 
                data={data}
                renderItem={ListItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const LocalStorageComponent = () => {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('todos');
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(data));
    }, [data]);

    const addItem = () => {
        const newData = [...data, { id: data.length, title: `Item ${data.length}` }];
        setData(newData);
    };

    return (
        <View>
            <Text>Local Storage Data</Text>
            <FlatList 
                data={data}
                renderItem={ListItem}
                keyExtractor={item => item.id}
            />
            <Button onPress={addItem} title="Add Item"/>
        </View>
    );
};

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button onPress={() => setCount(count + 1)} title="Increment" />
        </View>
    );
};

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View>
            <Text>Seconds: {seconds}</Text>
        </View>
    );
};

const ListItem = ({ item }) => (
  <View>
      <Text>{item.title}</Text>
  </View>
);

const App = () => {
  return (
      <View>
          <LocalStorageComponent />
          <DataFetchingComponent />
          <CounterComponent />
          <TimerComponent />
      </View>
  );
};

export default App;
