import { Text, View } from 'react-native';
import { styles } from '../../QuestionnaireScreen.style';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * * @name Header
 * @description This component is used to display the header of the questionnaire screen.
 * @param styles
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({ styles }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="bloodtype" size={32} color="#cc0000" />
        <Text style={styles.title}>DAVAOCI KRVI - ANKETNI UPITNIK</Text>
        <MaterialIcons name="assignment" size={28} color="#cc0000" />
      </View>

      <View style={styles.instructionBox}>
        <View style={styles.instructionHeader}>
          <MaterialIcons name="info" size={20} color="white" />
          <Text style={styles.instructionTitle}>UPUTSTVO ZA DAVAOCE</Text>
        </View>
        <Text style={styles.instructionText}>
          ◆ Molimo Vas da pažljivo pročitate i iskreno odgovorite na svako
          pitanje
          {'\n'}
          {'\n'}◆ Anketa je važna za Vašu sigurnost i sigurnost primaoca krvi
          {'\n'}
          {'\n'}◆ Svi podaci su strogo povjerljivi i zaštićeni ljekarskom tajnom
          {'\n'}
          {'\n'}◆ Vrijeme popunjavanja: ~5-7 minuta
        </Text>

        <View style={styles.warningBox}>
          <MaterialIcons name="warning" size={18} color="#cc0000" />
          <Text style={styles.warningText}>
            Neispravni ili neistiniti odgovori mogu ugroziti zdravlje primaoca!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
