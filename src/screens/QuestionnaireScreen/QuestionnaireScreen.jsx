import React, { useState } from 'react';
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

/**
 * @name QuestionnaireScreen
 * @description This component is used to display the questionnaire screen.
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionnaireScreen = () => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const allQuestions = [
    ...basicQuestions,
    ...womenQuestions,
    ...confirmQuestions,
  ];

  const handleAnswer = (questionId, selectedAnswer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
  };

  const goNext = () => setCurrentStep((prev) => prev + 1);
  const goBack = () => setCurrentStep((prev) => prev - 1);

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
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: darkred; text-align: center; }
          .question { margin-bottom: 20px; }
          .answer { font-weight: bold; color: #444; }
        </style>
      </head>
      <body>
        <h1>Upitnik za davaoce krvi</h1>
        ${allQuestions
          .map((q) => {
            const selected = answers[q.id];
            const selectedText = selected || 'Nije odgovoreno';
            return `
              <div class="question">
                <p><strong>${q.question}</strong></p>
                <p class="answer">Odgovor: ${selectedText}</p>
              </div>
            `;
          })
          .join('')}
      </body>
    </html>
  `;

    try {
      await Print.printAsync({ html: htmlContent });
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Greška', 'Štampanje nije uspjelo.');
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
