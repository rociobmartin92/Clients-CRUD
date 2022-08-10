import { View, Text, StyleSheet } from 'react-native';
import { Headline, Button, Subheading, FAB } from 'react-native-paper';
import baseURL from '../conection/baseURL';
import React from 'react';
import axios from 'axios';

const DetailsClients = ({ route, navigation }) => {
  console.log(route.params);

  const { name, phone, company, email, id, setRefresh, refresh } = route.params;

  const handleDeleteClient = async (id) => {
    await axios
      .delete(`${baseURL}clients/${id}`)
      .then((res) => setRefresh(!refresh))
      .catch((e) => console.log(e));
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.view}>
      <Headline style={styles.head}> {name} </Headline>
      <Text style={styles.texto}>
        Empresa: <Subheading>{company}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Correo: <Subheading> {email} </Subheading>
      </Text>
      <Text style={styles.texto}>
        Teléfono: <Subheading> {phone} </Subheading>
      </Text>

      <Button
        style={styles.boton}
        mode="contained"
        icon="cancel"
        onPress={() => handleDeleteClient(id)}
      >
        Eliminar Cliente
      </Button>

      <FAB
        style={styles.fab}
        icon="pencil"
        onPress={() => navigation.navigate('add', { dataClient: route.params })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
  boton: {
    backgroundColor: '#7fbfbf',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#7fbfbf',
    margin: 10,
    borderWidth: 4,
    flex: 1,
  },
  head: { marginBottom: 35 },
  fab: { marginTop: 245, marginLeft: 210, backgroundColor: '#7fbfbf' },
});

export default DetailsClients;
