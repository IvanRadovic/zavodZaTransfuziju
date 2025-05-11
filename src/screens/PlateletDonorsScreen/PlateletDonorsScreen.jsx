import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { faqData } from '../../constants/plateletDonors';

// /*========== STYLES ==========*/
import { styles } from './PlateletDonorsScreen.style';
import Facts from './components/facts/Facts';

/*========== COMPONENTS ============*/
import Header from './components/Header/Header';
import GoBackButton from '../../components/ui/goBack/GoBackButton';
import { useInactivityTimer } from '../../hooks/useInactivityTimer';

/**
 * @name PlateletDonorsScreen
 * @description Screen component for displaying information about platelet donors.
 * @returns {JSX.Element}
 */
const PlateletDonorsScreen = () => {
  const navigation = useNavigation();
  const [activeSections, setActiveSections] = useState([]);
  const { panHandlers, handleActivity } = useInactivityTimer(navigation);

  const toggleSection = (index) => {
    setActiveSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
    resetTimer();
  };
  return (
    <View {...panHandlers} style={styles.overlay}>
      <ScrollView
        onScrollBeginDrag={handleActivity}
        scrollEventThrottle={200}
        contentContainerStyle={styles.container}
      >
        <GoBackButton onPress={() => navigation.goBack()} />
        <Header styles={styles} />
        <View style={styles.questionsContainer}>
          {faqData.map((item, index) => (
            <View key={index} style={styles.card}>
              <TouchableOpacity
                style={styles.questionContainer}
                onPress={() => toggleSection(index)}
                activeOpacity={0.9}
              >
                <Text style={styles.question}>{item.question}</Text>
                <MaterialIcons
                  name={
                    activeSections.includes(index)
                      ? 'expand-less'
                      : 'expand-more'
                  }
                  size={28}
                  color="#c62828"
                />
              </TouchableOpacity>

              <Collapsible collapsed={!activeSections.includes(index)}>
                <View style={styles.answerContainer}>
                  <Text style={styles.answer}>{item.answer}</Text>
                </View>
              </Collapsible>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlateletDonorsScreen;
