import { ScrollView, Text, View } from 'react-native';

/*=========== STYLES ============*/
import { styles } from './BloodDonorsScreen.style';

/*=========== CONSTANTS ============*/
import { bloodDonors } from '../../constants/bloodDonors';

/*=========== COMPONENTS ============*/
import FAQItem from '../../components/ui/FAQItem/FAQItem';
import { phSmall, pMediumSmall } from '../../Style/Components/Paddings';
import { FontSizeBig, textCenter } from '../../Style/Components/FontAdjust';
import { mvMedium } from '../../Style/Components/Margins';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Header from './components/Header/Header';

/**
 * @name BloodDonorsScreen
 * @description This component is used to display the blood donors screen.
 * @returns {JSX.Element}
 */
const BloodDonorsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header styles={styles} />
      <ScrollView contentContainerStyle={{ ...pMediumSmall }}>
        {bloodDonors.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default BloodDonorsScreen;
