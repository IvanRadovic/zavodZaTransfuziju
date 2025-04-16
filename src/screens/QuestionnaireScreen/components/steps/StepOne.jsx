import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';

/*========== COMPONENTS ============*/
import Header from '../header/Header';
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';
import { flex1 } from '../../../../Style/Components/FlexAligments';

const StepOne = ({ questions, onNext, answers, onAnswer, styles }) => {
  const isValid = questions.every((q) => answers[q.id]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 50 }}>
      <Header styles={styles} />
      <View style={{ ...flex1 }}>
        <FlashList
          estimatedItemSize={40}
          contentContainerStyle={{ paddingHorizontal: 5 }}
          data={questions}
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
      </View>
      <TouchableOpacity
        onPress={() => {
          if (isValid) {
            onNext();
          } else {
            Alert.alert(
              'Greska', // Title of the alert
              'Molimo Vas da odgovorite na sva pitanja pre nego što nastavite.' // Message of the alert
            );
          }
        }}
        style={styles.sendSurveyButton}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Sledeće</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepOne;
