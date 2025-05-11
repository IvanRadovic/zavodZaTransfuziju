import React, { useState, useEffect } from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';

/*=========== STYLES ============*/
import { flex1 } from '../../../../Style/Components/FlexAligments';

/*========== COMPONENTS ============*/
import Header from '../header/Header';
import QuestionView from '../../../../components/layout/QuestionView/QuestionView';
import { ActivityIndicator } from 'react-native-paper';

const StepOne = ({
  questions,
  onNext,
  answers,
  onAnswer,
  styles,
  resetTimer,
}) => {
  const isValid = questions.every((q) => answers[q.id]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
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
    <View style={{ flex: 1, paddingHorizontal: 50 }}>
      <Header styles={styles} />
      <View style={{ ...flex1 }}>
        <FlashList
          estimatedItemSize={80} // Procijenjena visina jednog itema
          initialNumToRender={10} // Koliko itema renderujemo inicijalno
          maxToRenderPerBatch={5} // Koliko itema dodajemo po batch-u
          windowSize={21} // Koliko itema držimo u memoriji
          removeClippedSubviews={true}
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
          ListEmptyComponent={() => (
            <ActivityIndicator
              size="large"
              color="#880808"
              style={{ marginTop: 20 }}
            />
          )}
        />
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.sendSurveyButton}>
        <Text style={{ color: 'white', fontSize: 18 }}>Sledeće</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepOne;
