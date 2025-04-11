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

/**
 * @name BloodDonorsScreen
 * @description This component is used to display the blood donors screen.
 * @returns {JSX.Element}
 */
const BloodDonorsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...mvMedium }}>
        <Text style={{ fontSize: 35, ...textCenter }}>Vodič za davaoce</Text>
      </View>
      <ScrollView contentContainerStyle={{ ...pMediumSmall }}>
        {bloodDonors.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BloodDonorsScreen;
