import { StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../conection/baseURL';
import { FlatList } from 'react-native';
import { List, Headline } from 'react-native-paper';
import { LoadingContext } from '../context/LoadingProvider';
import Loading from '../components/Loading';

const Home = () => {
  const [clients, setClients] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);

  console.log(loading);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}clients`)
      .then((response) => {
        setClients(response.data);
        setLoading(false);
      })
      .catch((e) => console.log('There are no clients in database'));
    return () => {
      setClients([]);
    };
  }, []);

  return (
    <View style={styles.view}>
      <Headline style={styles.head}>Clientes</Headline>
      <View>
        <FlatList
          data={clients}
          renderItem={({ item }) => (
            <List.Item title={item.name} description={item.company} key={item.id} />
          )}
        />
      </View>
      <Loading loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  head: { alignSelf: 'center', marginTop: 10 },
  view: { borderColor: '#ac7670', margin: 10, borderWidth: 4, flex: 1 },
});

export default Home;
