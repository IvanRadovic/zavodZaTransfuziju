import React, { useCallback } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

/*========== IMAGES ==========*/
import kapljica from '../../../assets/background/kapljica.png';
import srca from '../../../assets/background/srca.png';
import upitnik from '../../../assets/background/anketa.png';

/*========== REDUX ============*/
import { resetSurvey } from '../../store/reducers/survey-reducer';

/*========== STYLES ==========*/
import { styles } from './HomeScreen.style';
import { flex2, flex3 } from '../../Style/Components/FlexAligments';
import { fsMediumBig } from '../../Style/Components/FontAdjust';

/*========== COMPONENTS ==========*/
import DefaultButton from '../../components/ui/DefaultButton/DefaultButton';

/**
 * @name HomeScreen
 * @description Home screen component for the application.
 * @returns {JSX.Element}
 */
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(resetSurvey());
    }, [dispatch])
  );
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
            style={{
              width: 60,
              height: 60,
              borderRadius: 5,
              resizeMode: 'cover',
            }}
          />
          <Text style={{ ...fsMediumBig, heigth: 300 }}>DAVAOCI KRVI</Text>
        </DefaultButton>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('PlateletDonorsScreen')}
        >
          <Image
            source={srca}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
          <Text style={{ ...fsMediumBig, heigth: 300 }}>
            DAVAOCI TROMBOCITA
          </Text>
        </DefaultButton>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('QuestionnaireScreen')}
        >
          <Image source={upitnik} style={styles.imageLogo} />
          <Text style={{ ...fsMediumBig }}>UPITNIK</Text>
        </DefaultButton>
      </View>
    </View>
  );
};

export default HomeScreen;
