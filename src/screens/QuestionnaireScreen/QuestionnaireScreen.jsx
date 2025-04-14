import React, { useState, useCallback } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';

/*=========== STYLES ============*/
import { styles } from './QuestionnaireScreen.style';

/*=========== CONSTANTS ============*/
import { basicQuestions, confirmQuestions, womenQuestions } from './constants';

/*========== COMPONENTS ==========*/
import StepThree from './components/steps/StepThree';
import StepTwo from './components/steps/StepTwo';
import StepOne from './components/steps/StepOne';
import { bgMain } from '../../Style/Components/BackgroundColors';
import {
  decrementStep,
  incrementStep,
  resetSurvey,
  selectAnswers,
  selectCurrentStep,
  setAnswer,
} from '../../store/reducers/survey-reducer';
import { useDispatch, useSelector } from 'react-redux';
import QuestionnaireHTML from '../../components/questionnaireHTML/QuestionnaireHTML';
import GoBackButton from '../../components/ui/goBack/GoBackButton';

/**
 * @name QuestionnaireScreen
 * @description This component is used to display the questionnaire screen.
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionnaireScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const answers = useSelector(selectAnswers);
  const currentStep = useSelector(selectCurrentStep);

  const handleAnswer = (questionId, selectedAnswer) => {
    dispatch(setAnswer({ questionId, answer: selectedAnswer }));
  };

  const goNext = () => dispatch(incrementStep());
  const goBack = () => dispatch(decrementStep());
  const printAnketa = async () => {
    const allQuestions = [
      ...basicQuestions,
      ...womenQuestions,
      ...confirmQuestions,
    ];

    const htmlContent = QuestionnaireHTML({ allQuestions, answers });

    try {
      await Print.printAsync({ html: htmlContent });

      // const { uri } = await Print.printToFileAsync({ html: htmlContent });
      // console.log('Generated PDF URI:', uri);
      //
      // const formData = new FormData();
      // formData.append('file', {
      //   uri,
      //   name: 'anketa.pdf',
      //   type: 'application/pdf',
      // });
      //
      // const printerIP = 'http://192.168.223.1/ipp/print';
      //
      // const response = await fetch(printerIP, {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      //
      // console.log('Response:', response);

      // if (response.ok) {
      //   Alert.alert('Uspjeh', 'Dokument je poslat na printer.');
      // } else {
      //   Alert.alert('Greška', 'Printer je odbio dokument.');
      // }
      dispatch(resetSurvey());
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Greška', 'Nije moguće direktno štampati.');
      console.error('Greška pri direktnom štampanju:', error);
    }
  };

  return (
    <View style={{ flex: 1, ...bgMain, padding: 24 }}>
      <GoBackButton onPress={() => navigation.goBack()} />
      {currentStep === 1 && (
        <StepOne
          questions={basicQuestions}
          onNext={goNext}
          answers={answers}
          onAnswer={handleAnswer}
          styles={styles}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          questions={womenQuestions}
          onNext={goNext}
          onBack={goBack}
          answers={answers}
          onAnswer={handleAnswer}
          styles={styles}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          questions={confirmQuestions}
          onBack={goBack}
          answers={answers}
          onAnswer={handleAnswer}
          styles={styles}
          onSubmit={printAnketa}
        />
      )}
    </View>
  );
};

export default QuestionnaireScreen;
