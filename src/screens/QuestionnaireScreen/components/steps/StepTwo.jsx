import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

/*========== COMPONENTS ============*/
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';

const StepTwo = ({ questions, onNext, onBack, answers, onAnswer, styles }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.descriptionText}>Za žene</Text>
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
            selectedValue={answers[item.id]}
          />
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={onBack} style={styles.sendSurveyButton}>
          <Text style={{ color: 'white', fontSize: 18 }}>Nazad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onNext()}
          style={styles.sendSurveyButton}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Sledeće</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StepTwo;
