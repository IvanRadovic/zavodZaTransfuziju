import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Ionicons from '@expo/vector-icons/Ionicons';

/*========== ICONS ============*/
import {
  flex1,
  FlexDirectionRow,
  gapSmall,
  justifyCenter,
} from '../../../../Style/Components/FlexAligments';

/*========== COMPONENTS ============*/
import ConfirmClientText from '../confirmClientText/ConfirmClientText';
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';
import { ActivityIndicator } from 'react-native-paper';

const StepThree = ({
  questions,
  onBack,
  answers,
  onAnswer,
  styles,
  onSubmit,
  resetTimer,
}) => {
  const isValid = questions.every((q) => answers[q.id]);
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    resetTimer();
    onBack();
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const submitSurvey = () => {
    resetTimer();
    if (isValid) {
      onSubmit();
    } else {
      Alert.alert(
        'Greska',
        'Molimo Vas da odgovorite na sva pitanja pre nego što nastavite.'
      );
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#880808" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 50 }}>
      <ConfirmClientText styles={styles} />
      <FlashList
        estimatedItemSize={40}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        data={questions}
        extraData={answers}
        onScrollBeginDrag={resetTimer} // Koristite onScrollBeginDrag umjesto onScroll
        scrollEventThrottle={200} // Osigurajte dovoljno često osvježavanje
        onScroll={resetTimer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <QuestionView
            questionId={item.id}
            question={item.question}
            options={item.options}
            onSelect={onAnswer}
            selectedValue={answers[item.id]}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleBack}
          style={[
            styles.sendSurveyButton,
            { ...flex1, ...FlexDirectionRow, ...gapSmall, ...justifyCenter },
          ]}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={{ color: 'white', fontSize: 18 }}>Nazad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={submitSurvey}
          style={[
            styles.sendSurveyButton,
            { ...flex1, ...FlexDirectionRow, ...gapSmall, ...justifyCenter },
          ]}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
            Pošalji anketu
          </Text>
          <Ionicons name="send-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StepThree;
