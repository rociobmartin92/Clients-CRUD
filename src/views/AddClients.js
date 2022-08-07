import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import baseURL from '../conection/baseURL';
import axios from 'axios';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Email Address is Required'),
  name: yup.string().required('Ingrese un nombre'),
  phone: yup.number().required('Ingrese un teléfono'),
  company: yup.string(),
});

const width = Dimensions.get('screen').width;

const initialData = {
  name: '',
  phone: '',
  email: '',
  company: '',
};

const AddClients = () => {
  return (
    <View style={styles.global}>
      <Text style={styles.text}> Nuevo Cliente:</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialData}
        onSubmit={(values) => {
          axios
            .post(`${baseURL}clients`, values)
            .then((response) => {console.log(response);
            })
            .catch((e) => console.log(e));
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
          <View style={styles.view}>
            <TextInput
              placeholder={initialData.name}
              label="Nombre y Apellido:"
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>}
            <TextInput
              placeholder={initialData.phone}
              label="Telefono:"
              style={styles.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {errors.phone && <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>}
            <TextInput
              placeholder={initialData.email}
              label="Email:"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
            <TextInput
              placeholder={initialData.company}
              label="Empresa:"
              style={styles.input}
              onChangeText={handleChange('company')}
              onBlur={handleBlur('company')}
              value={values.company}
            />
            {errors.company && <Text style={{ fontSize: 10, color: 'red' }}>{errors.company}</Text>}
            <Button
              icon="check-circle"
              labelStyle={{ fontSize: 15, margin: 0, padding: 0 }}
              mode="outlined"
              onPress={() => handleSubmit()}
            >
              ok
            </Button>
          </View>
        )}
      </Formik>
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
