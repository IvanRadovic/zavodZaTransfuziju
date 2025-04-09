import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import img from '../../../assets/zavod_logo.jpg';

/*========== STYLES ==========*/
import { styles } from './HomeScreen.style';
import DefaultButton from '../../components/ui/DefaultButton/DefaultButton';

/**
 * @name HomeScreen
 * @description Home screen component for the application.
 * @returns {JSX.Element}
 */
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/*<View>*/}
      {/*  <Image source={require('../../../assets/zavod_logo.jpg')} />*/}
      {/*  <Text>Zavod za transfuziju krvi</Text>*/}
      {/*</View>*/}
      <View style={styles.optionContainer}>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('BloodDonorsScreen')}
        >
          <Text>Davaoci krvi</Text>
        </DefaultButton>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('PlateletDonorsScreen')}
        >
          <Text>Davaoci trombocita</Text>
        </DefaultButton>
        <DefaultButton
          style={styles.iconContainer}
          onPress={() => navigation.navigate('QuestionnaireScreen')}
        >
          <Text>Upitnik</Text>
        </DefaultButton>
      </View>
    </View>
  );
};

export default HomeScreen;
