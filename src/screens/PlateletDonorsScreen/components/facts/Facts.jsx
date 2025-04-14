import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Facts = ({ styles }) => {
  return (
    <View style={[styles.card, styles.infoCard]}>
      <View style={styles.factContainer}>
        <MaterialIcons name="bloodtype" size={24} color="#c62828" />
        <Text style={styles.factText}>
          <Text style={styles.bold}>15 triliona</Text> trombocita cirkuliše
          krvotokom prosječne odrasle osobe
        </Text>
      </View>

      <View style={styles.factContainer}>
        <MaterialIcons name="access-time" size={24} color="#c62828" />
        <Text style={styles.factText}>
          Trombociti se obnavljaju svakih{' '}
          <Text style={styles.bold}>5-7 dana</Text>, što ih čini idealnim za
          redovno davanje
        </Text>
      </View>

      <View style={styles.factContainer}>
        <MaterialIcons name="science" size={24} color="#c62828" />
        <Text style={styles.factText}>
          Jedna donacija može sadržati do{' '}
          <Text style={styles.bold}>3×10¹¹</Text> trombocita
        </Text>
      </View>
    </View>
  );
};

export default Facts;
