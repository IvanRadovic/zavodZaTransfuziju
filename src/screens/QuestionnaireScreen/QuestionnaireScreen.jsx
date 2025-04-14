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
  selectAnswers,
  selectCurrentStep,
  setAnswer,
} from '../../store/reducers/survey-reducer';
import { useDispatch, useSelector } from 'react-redux';

/**
 * @name QuestionnaireScreen
 * @description This component is used to display the questionnaire screen.
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionnaireScreen = () => {
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
  <html>
    <head>
      <meta charset="UTF-8" />
        <style>
        body { font-family: Arial, sans-serif; padding: 1px; }
        h5 { color: darkred; text-align: center; margin-bottom: 0px; }
        .question { 
          font-size: 10px; 
          display: flex; 
          gap: 5px; 
          align-items: center;
          justify-content: space-between; 
          border: 0.5px solid #ccc; 
          padding: 1px 2px 1px 2px; 
          border-radius: 5px; 
        }
        .options { 
          display: flex; 
          gap: 10px; 
          font-size: 10px; 
          align-items: center; 
          padding: 1px 5px 1px 5px; 
          border-radius: 5px; 
          background-color: #f9f9f9; 
        }
        .option { font-weight: normal; color: #444; }
        .selected { font-weight: bold; color: red; }
      </style>
    </head>
    <body>
      <h2>Upitnik za davaoce krvi</h2>
      ${allQuestions
        .map((q) => {
          const selected = answers[q.id];
          return `
            <div class="question">
              <p><strong>${q.question}</strong></p>
              <div class="options">
                <span class="option ${selected === 'DA' ? 'selected' : ''}">DA</span>
                <span class="option ${selected === 'NE' ? 'selected' : ''}">NE</span>
              </div>
            </div>
          `;
        })
        .join('')}
    </body>
  </html>
`;

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

      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Greška', 'Nije moguće direktno štampati.');
      console.error('Greška pri direktnom štampanju:', error);
    }
  };

  return (
    <View style={{ flex: 1, ...bgMain, padding: 24 }}>
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
