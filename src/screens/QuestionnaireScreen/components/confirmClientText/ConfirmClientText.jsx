import { Text, View } from 'react-native';
import React from 'react';

/**
 * @name ConfirmClientText
 * @description This component is used to display the confirmation text for the client.
 * @param styles
 * @returns {JSX.Element}
 */
const ConfirmClientText = ({ styles }) => {
  return (
    <View>
      <Text style={styles.headerText}>SAGLASNOST DAVAOCA</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Popunuio\la sam upitnik o davanju krvi ili komponente krvi i
          izjavljujem sledceće:
        </Text>
      </View>
    </View>
  );
};

export default ConfirmClientText;
