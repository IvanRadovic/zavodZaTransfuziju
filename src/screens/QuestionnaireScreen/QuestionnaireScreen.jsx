import React from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';
import { useDispatch, useSelector } from 'react-redux';

/*=========== STYLES ============*/
import { styles } from './QuestionnaireScreen.style';
import { bgMain } from '../../Style/Components/BackgroundColors';

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

    const htmlContent = `
    ${QuestionnaireHTML({ allQuestions, answers })}
    <div style="page-break-before: always;"></div>
    ${DonorCardHTML()}
  `;

    try {
      await Print.printAsync({ html: htmlContent });
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
