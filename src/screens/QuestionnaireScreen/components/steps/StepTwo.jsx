import React, { useEffect, useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

/*=========== STYLE COMPONENTS ===============*/
import {
  flex1,
  FlexDirectionRow,
  gapSmall,
  justifyCenter,
} from '../../../../Style/Components/FlexAligments';

/*========== COMPONENTS ============*/
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';
import WomenHeader from '../womenHeader/WomenHeader';
import { ActivityIndicator } from 'react-native-paper';

const StepTwo = ({
  questions,
  onNext,
  onBack,
  answers,
  onAnswer,
  styles,
  resetTimer,
}) => {
  const isValid = questions.every((q) => answers[q.id]);
  const [isLoading, setIsLoading] = useState(true);

  const onGoBack = () => {
    resetTimer();
    onBack();
  };

  const handleNext = () => {
    resetTimer();
    onNext();
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#880808" />
      </View>
    );
  }

  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 50 }}>
        <WomenHeader styles={styles} />

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
            onPress={onGoBack}
            style={[
              styles.sendSurveyButton,
              { ...flex1, ...FlexDirectionRow, ...gapSmall, ...justifyCenter },
            ]}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 18 }}>Nazad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNext}
            style={[styles.sendSurveyButton, { ...flex1 }]}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Sledeće</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default StepTwo;
