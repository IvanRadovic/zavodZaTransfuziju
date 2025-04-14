import { Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const WomenHeader = ({ styles }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.femaleHeader}>
        <MaterialCommunityIcons
          name="gender-female"
          size={32}
          color="#ff3366"
        />
        <Text style={styles.sectionTitle}>SPECIJALNA PITANJA ZA ŽENE</Text>
        <MaterialCommunityIcons name="heart-pulse" size={32} color="#ff3366" />
      </View>

      <View style={styles.femaleNote}>
        <MaterialIcons name="medical-services" size={20} color="#ff3366" />
        <Text style={styles.femaleNoteText}>
          Ovaj dio ankete je obavezan isključivo za žene i odnosi se na
          reproduktivno zdravlje i eventualnu trudnoću
        </Text>
      </View>
    </View>
  );
};

export default WomenHeader;
