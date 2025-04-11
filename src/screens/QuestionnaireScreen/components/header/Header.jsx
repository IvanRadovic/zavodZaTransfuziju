import { Text, View } from 'react-native';
import { styles } from '../../QuestionnaireScreen.style';
import React from 'react';

/**
 * * @name Header
 * @description This component is used to display the header of the questionnaire screen.
 * @param styles
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({ styles }) => {
  return (
    <View>
      <Text style={styles.headerText}>POPUNJAVA DAVALAC KRVI</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Molimo Vas da pažljivo pročitate i iskreno odgovorite na svako
          pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti
          transfuziološkog liječenja bolesnika. Vaši odgovori, kao i svi ostali
          podaci o Vama su potpuno povjerljivi (ljekarska tajna) i koristiće se
          samo za potrebe transfuziološkog službe.
        </Text>
      </View>
    </View>
  );
};

export default Header;
