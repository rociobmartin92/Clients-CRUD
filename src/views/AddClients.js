import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Text, Button } from 'react-native-paper';

const width = Dimensions.get('screen').width;

const initialData = {
  name: 'Escribe tu nombre..',
  phone: 'Escribe tu teléfono..',
  email: 'Escribe tu correo electrónico..',
  company: 'Escribe el nombre de tu empresa..',
};

const AddClients = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = () => {
    const newClient = {
      name: name,
      phone: phone,
      email: email,
      company: company,
    };

    setData({ newClient });
  };

  console.log(data);

  return (
    <View style={styles.global}>
      <Text style={styles.text}> Nuevo Cliente:</Text>
      <View style={styles.view}>
        <TextInput
          placeholder={initialData.name}
          label="Nombre y Apellido:"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder={initialData.phone}
          label="Telefono:"
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          placeholder={initialData.email}
          label="Email:"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder={initialData.company}
          label="Empresa:"
          style={styles.input}
          value={company}
          onChangeText={(text) => setCompany(text)}
        />
        <Button
          icon="check-circle"
          labelStyle={{ fontSize: 15, margin: 0, padding: 0 }}
          mode="outlined"
          onPress={() => handleSubmit()}
        >
          ok
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    padding: 0,
    backgroundColor: '#f2f2f2',
    margin: 0,
  },
  view: {
    width: width * 0.8,
    marginTop: 7,
    marginBottom: 7,
  },
  global: {
    alignItems: 'center',
    borderColor: '#ac7670',
    margin: 10,
    borderWidth: 4,
    justifyContent: 'center',
    flex: 1,
  },
  text: { fontSize: 15, marginTop: 25 },
});
export default AddClients;
