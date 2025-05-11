import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/*=========== STYLES ============*/
import { styles } from './BloodDonorsScreen.style';

/*=========== CONSTANTS ============*/
import { bloodDonors } from '../../constants/bloodDonors';

/*=========== COMPONENTS ============*/
import FAQItem from '../../components/ui/FAQItem/FAQItem';
import Header from './components/Header/Header';
import GoBackButton from '../../components/ui/goBack/GoBackButton';

/*============ HOOKS ==============*/
import { useInactivityTimer } from '../../hooks/useInactivityTimer';

/**
 * @name BloodDonorsScreen
 * @description This component is used to display the blood donors screen.
 * @returns {JSX.Element}
 */
const BloodDonorsScreen = () => {
  const navigation = useNavigation();
  const { panHandlers, resetTimer, handleActivity } =
    useInactivityTimer(navigation);
  return (
    <View {...panHandlers} style={styles.container}>
      <ScrollView
        onScrollBeginDrag={handleActivity}
        scrollEventThrottle={200}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <GoBackButton onPress={() => navigation.goBack()} />
        <Header styles={styles} />
        {bloodDonors.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BloodDonorsScreen;
