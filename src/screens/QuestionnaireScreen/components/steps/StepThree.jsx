import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';

/*========== ICONS ============*/
import { flex1 } from '../../../../Style/Components/FlexAligments';

/*========== COMPONENTS ============*/
import ConfirmClientText from '../confirmClientText/ConfirmClientText';
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';

const StepThree = ({
  questions,
  onBack,
  answers,
  onAnswer,
  styles,
  onSubmit,
}) => {
  const isValid = questions.every((q) => answers[q.id]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 50 }}>
      <ConfirmClientText styles={styles} />
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onBack}
          style={[styles.sendSurveyButton, { ...flex1 }]}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Nazad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSubmit()}
          style={[styles.sendSurveyButton, { ...flex1 }]}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
            Pošalji anketu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StepThree;
