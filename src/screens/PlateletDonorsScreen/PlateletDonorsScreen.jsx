import { Text, View } from 'react-native';

// /*========== STYLES ==========*/
import { styles } from './PlateletDonorsScreen.style';
import { fsMediumBiggest, textCenter } from '../../Style/Components/FontAdjust';

/**
 * @name PlateletDonorsScreen
 * @description Screen component for displaying information about platelet donors.
 * @returns {JSX.Element}
 */
const PlateletDonorsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...fsMediumBiggest, ...textCenter }}>
        Pozivamo Vas da postanete dobrovoljni davalac
      </Text>
    </View>
  );
};

export default PlateletDonorsScreen;
