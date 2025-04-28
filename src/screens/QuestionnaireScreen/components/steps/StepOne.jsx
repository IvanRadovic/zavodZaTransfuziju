import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';

/*=========== STYLES ============*/
import { flex1 } from '../../../../Style/Components/FlexAligments';

/*========== COMPONENTS ============*/
import Header from '../header/Header';
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';

const StepOne = ({
  questions,
  onNext,
  answers,
  onAnswer,
  styles,
  resetTimer,
}) => {
  const isValid = questions.every((q) => answers[q.id]);

  const handleNext = () => {
    resetTimer();
    if (isValid) {
      onNext();
    } else {
      Alert.alert(
        'Greska',
        'Molimo Vas da odgovorite na sva pitanja pre nego što nastavite.'
      );
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 50 }}>
      {/*<Header styles={styles} />*/}
      <View style={{ ...flex1 }}>
        <FlashList
          estimatedItemSize={30}
          contentContainerStyle={{ paddingHorizontal: 5 }}
          data={questions}
          extraData={answers}
          onScroll={resetTimer}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <QuestionView
                questionId={item.id}
                question={item.question}
                options={item.options}
                onSelect={onAnswer}
                selectedValue={answers[String(item.id)]}
              />
            );
          }}
        />
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.sendSurveyButton}>
        <Text style={{ color: 'white', fontSize: 18 }}>Sledeće</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepOne;
