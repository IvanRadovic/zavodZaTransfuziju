import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';
import { useDispatch, useSelector } from 'react-redux';

/*=========== STYLES ============*/
import { styles } from './QuestionnaireScreen.style';
import { bgMain } from '../../Style/Components/BackgroundColors';

/*========== HOOKS ============*/
import { useInactivityTimer } from '../../hooks/useInactivityTimer';

/*=========== CONSTANTS ============*/
import { basicQuestions, confirmQuestions, womenQuestions } from './constants';

/*=========== REDUX ===========*/
import {
  decrementStep,
  incrementStep,
  resetSurvey,
  selectAnswers,
  selectCurrentStep,
  setAnswer,
} from '../../store/reducers/survey-reducer';

/*========== COMPONENTS ==========*/
import StepThree from './components/steps/StepThree';
import StepTwo from './components/steps/StepTwo';
import StepOne from './components/steps/StepOne';
import QuestionnaireHTML from '../../components/questionnaireHTML/QuestionnaireHTML';
import GoBackButton from '../../components/ui/goBack/GoBackButton';
import { DonorCardHTML } from '../../components/ui/donorCard/DonorCard';

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
  const { panHandlers, resetTimer } = useInactivityTimer(navigation);

  const handleAnswer = (questionId, selectedAnswer) => {
    dispatch(setAnswer({ questionId, answer: selectedAnswer }));
  };

  const goNext = () => dispatch(incrementStep());
  const goBack = () => dispatch(decrementStep());
  const printAnketa = async () => {
    console.log('This is the printAnketa function');
    const allQuestions = [
      ...basicQuestions,
      ...womenQuestions,
      ...confirmQuestions,
    ];

    const htmlContent =
      (QuestionnaireHTML({ allQuestions, answers }) || '') +
      '<div style="page-break-before: always;"></div>' +
      (DonorCardHTML() || '');

    try {
      await Print.printAsync({ html: htmlContent });
      dispatch(resetSurvey());
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Greška', 'Nije moguće direktno štampati.');
      console.error('Greška pri direktnom štampanju:', error);
    }
  };

  useEffect(() => {
    dispatch(resetSurvey());
  }, []);

  return (
    <View style={{ flex: 1, ...bgMain, padding: 24 }} {...panHandlers}>
      <GoBackButton onPress={() => navigation.goBack()} />
      {currentStep === 1 && (
        <StepOne
          questions={basicQuestions}
          onNext={goNext}
          answers={answers}
          onAnswer={handleAnswer}
          styles={styles}
          resetTimer={resetTimer}
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
          resetTimer={resetTimer}
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
          resetTimer={resetTimer}
        />
      )}
    </View>
  );
};

export default QuestionnaireScreen;
