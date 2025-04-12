import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

/*========== COMPONENTS ============*/
import Header from '../header/Header';
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';

const StepOne = ({ questions, onNext, answers, onAnswer, styles }) => {
  const isValid = questions.every((q) => answers[q.id]);

  return (
    <View style={{ flex: 1 }}>
      <Header styles={styles} />
      <FlatList
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
      <TouchableOpacity
        onPress={() =>
          isValid ? onNext() : alert('Molimo odgovorite na sva pitanja.')
        }
        style={styles.sendSurveyButton}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Sledeće</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepOne;
