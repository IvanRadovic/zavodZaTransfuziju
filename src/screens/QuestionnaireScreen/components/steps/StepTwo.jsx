import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

/*========== COMPONENTS ============*/
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';
import WomenHeader from '../womenHeader/WomenHeader';
import {
  flex1,
  FlexDirectionRow,
  gapSmall,
  justifyCenter,
} from '../../../../Style/Components/FlexAligments';
import Ionicons from '@expo/vector-icons/Ionicons';

const StepTwo = ({ questions, onNext, onBack, answers, onAnswer, styles }) => {
  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 50 }}>
        <WomenHeader styles={styles} />
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
            style={[
              styles.sendSurveyButton,
              { ...flex1, ...FlexDirectionRow, ...gapSmall, ...justifyCenter },
            ]}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 18 }}>Nazad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNext()}
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
