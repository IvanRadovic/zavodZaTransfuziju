import React, { useCallback, useEffect } from 'react';
import { View, Alert, Text } from 'react-native';
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
import { ActivityIndicator } from 'react-native-paper';
import {
  alignItemsCenter,
  flex1,
  gapMediumSmall,
  justifyCenter,
} from '../../Style/Components/FlexAligments';
import AutoDisMissAlert from '../../components/layout/AutoDismissAlert/AutoDisMissAlert';

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
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { panHandlers, resetTimer } = useInactivityTimer(navigation);

  const handleAnswer = useCallback((questionId, selectedAnswer) => {
    dispatch(setAnswer({ questionId, answer: selectedAnswer }));
  }, []);

  const goNext = () => dispatch(incrementStep());
  const goBack = () => dispatch(decrementStep());
  const printAnketa = useCallback(async () => {
    console.log('This is the printAnketa function');
    const allQuestions = [
      ...basicQuestions,
      ...womenQuestions,
      ...confirmQuestions,
    ];

    const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        @page {size: A4 portrait;margin: 3mm;}
        .page-break {page-break-before: always !important;}
          body { font-family: Arial, sans-serif; font-size: 11px !important;  line-height: 1; }
         .container{ border: 0.5px solid gray; }
          h5 { color: #d80c0c; text-align: center; margin:0; text-transform: uppercase; }
          .questionHeader { background-color: rgba(250,233,70,0.99); display: flex; justify-content: center; align-items: center; flex-direction: column; color: #d80c0c; margin: 0px; padding-left: 2px; padding-right: 2px }
          .question { display: flex; justify-content: space-between; align-items: center; padding-right: 5px; border: 0.5px solid #ccc; }
          .questionWithSubQuestion { display: flex; flex-direction: column; }
          .sub-question{ padding-left: 30px; }
          .id { width: 14px; border-right: 0.5px solid #ccc; margin:0; padding: 2px; }
          .question p { margin: 0; flex: 1; }
          .options { display: flex; gap: 10px; min-width: 20px; justify-content: end; align-items: end; }
          .option { font-weight: normal; color: #000; font-size: 9px; }
          .options .selected { font-weight: bold; color: #d80c0c; }
          .selected { font-weight: bold; color: #d80c0c; }
        
          .signature, .footer { display: flex; justify-content: space-between; align-items: center; border-top: 0.5px solid #000; }
          .footerNote{ display: flex; flex-direction: column; padding-left: 2px; padding-right: 2px; }
          .footer-note-item{ margin-bottom: 0px; }
          
          /*============= DONOR CARD =================*/
        .container-donor-card {font-family: Arial, sans-serif;margin: 5px;display: flex;flex-direction: column; font-size: 12px !important;}
        .header {display: flex;justify-content: space-between;align-items: center;border: 1px solid gray;margin-top: 10px;margin-bottom: 350px;}
        .header .title {font-size: 20px !important;font-weight: bold;color: #d80c0c;}
        .partOne {display: flex;flex-direction: row; align-items: center; gap: 5px;}
        .partOne .section {display: flex;flex: 1;flex-direction: row; align-items: center; gap: 5px;}
        .partOne_section__item{display: flex;flex-direction: column;flex: 1;align-items: start;justify-content: start;gap: 5px;}
        .letters-group{display:flex;flex:1;justify-content: space-between;align-items: center;gap: 50px;}
        .letter {font-size: 16px !important;font-weight: bold;}
        .section {border: 1px solid gray;padding: 5px;}
        .row {display: flex;align-items: center;margin-bottom: 3px;}
        .label {flex: 1;}
        .value {border-bottom: 1px solid gray;flex: 2;}
        .checkbox-group {display: flex;gap: 20px;align-items: center;}
        .checkbox-group input {margin-right: 5px;}
        table {width: 100%;border-collapse: collapse;margin-top: 10px;}
        table, th, td {border: 1px solid gray;}
        th, td {padding: 5px;text-align: left;}
      </style>
    </head>
    <body>
      ${QuestionnaireHTML({ allQuestions, answers }) || ''}
      <div class="page-break"></div>
      ${DonorCardHTML() || ''}
    </body>
  </html>
`;
    try {
      setIsLoading(true);
      await Print.printAsync({
        html: htmlContent,
        orientation: 'portrait',
        paperSize: 'A4',
        twoSided: 'long',
      });
      navigation.navigate('HomeScreen');
      dispatch(resetSurvey());
    } catch (error) {
      Alert.alert('Greška', 'Nije moguće direktno štampati.');
      console.error('Greška pri direktnom štampanju:', error);
    } finally {
      setIsLoading(false);
    }
  }, [answers, dispatch, navigation]);

  useEffect(() => {
    dispatch(resetSurvey());
  }, []);

  return (
    <View style={{ flex: 1, ...bgMain, padding: 24 }} {...panHandlers}>
      {isLoading ? (
        <View
          style={{
            ...flex1,
            ...justifyCenter,
            ...alignItemsCenter,
            ...gapMediumSmall,
          }}
        >
          <ActivityIndicator size={80} />
          <Text style={{ fontSize: 22 }}> Proces u toku......</Text>
        </View>
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default QuestionnaireScreen;
