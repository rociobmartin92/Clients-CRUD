import React from 'react';
import { Button } from 'react-native-paper';

const TopBar = ({ navigation, title, icon }) => {
  const handleAddClient = () => {
    navigation.navigate('add');
  };

  return (
    <Button
      icon={icon}
      color="white"
      labelStyle={{ fontSize: 12, margin: 0, padding: 0 }}
      mode="outlined"
      onPress={() => handleAddClient()}
    >
      {title}
    </Button>
  );
};

export default TopBar;
