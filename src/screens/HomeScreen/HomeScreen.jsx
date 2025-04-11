import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import pozadina1 from '../../../assets/background/pozadina.png';
import pozadina2 from '../../../assets/background/pozadina2.png';
import pozadina3 from '../../../assets/background/pozadina_3.png';

import kapljica from '../../../assets/background/kapljica.png';
import srca from '../../../assets/background/srca.png';
import upitnik from '../../../assets/background/anketa.png';

import img from '../../../assets/zavod_logo.jpg';

/*========== STYLES ==========*/
import { styles } from './HomeScreen.style';
import DefaultButton from '../../components/ui/DefaultButton/DefaultButton';
import { flex2, flex3 } from '../../Style/Components/FlexAligments';
import { fsMediumBig } from '../../Style/Components/FontAdjust';

/**
 * @name HomeScreen
 * @description Home screen component for the application.
 * @returns {JSX.Element}
 */
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/doniraj-krv.png')}
        style={{ ...flex3, width: '101%', height: '100%' }}
      />
      <View style={styles.optionContainer}>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('BloodDonorsScreen')}
        >
          <Image
            source={kapljica}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
          <Text style={{ ...fsMediumBig }}>Davaoci krvi</Text>
        </DefaultButton>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('PlateletDonorsScreen')}
        >
          <Image
            source={srca}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
          <Text style={{ ...fsMediumBig }}>Davaoci trombocita</Text>
        </DefaultButton>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('QuestionnaireScreen')}
        >
          <Image
            source={upitnik}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
          <Text style={{ ...fsMediumBig }}>Upitnik</Text>
        </DefaultButton>
      </View>
    </View>
  );
};

export default HomeScreen;
