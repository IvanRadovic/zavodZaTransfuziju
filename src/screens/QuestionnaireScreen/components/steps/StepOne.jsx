import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

/*========== COMPONENTS ============*/
import Header from '../header/Header';
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';
import { flex1 } from '../../../../Style/Components/FlexAligments';

const StepOne = ({ questions, onNext, answers, onAnswer, styles }) => {
  const isValid = questions.every((q) => answers[q.id]);

  return (
    <View style={{ flex: 1 }}>
      <Header styles={styles} />
      <View style={{ ...flex1, paddingHorizontal: 80 }}>
        <FlashList
          estimatedItemSize={40}
          style={{ paddingHorizontal: 80 }}
          data={questions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <QuestionView
              questionId={item.id}
              question={item.question}
              options={item.options}
              onSelect={onAnswer}
              selectedValue={answers[item.id] || null}
            />
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => onNext()}
        style={styles.sendSurveyButton}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Sledeće</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepOne;
