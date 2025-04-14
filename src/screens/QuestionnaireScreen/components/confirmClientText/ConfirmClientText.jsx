import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * @name ConfirmClientText
 * @description This component is used to display the confirmation text for the client.
 * @param styles
 * @returns {JSX.Element}
 */
const ConfirmClientText = ({ styles }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="bloodtype" size={32} color="#cc0000" />
        <Text style={styles.title}>SAGLASNOST DAVAOCA</Text>
        <MaterialIcons name="assignment" size={28} color="#cc0000" />
      </View>
    </View>
  );
};

export default ConfirmClientText;
