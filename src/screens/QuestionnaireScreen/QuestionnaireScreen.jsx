import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import * as Print from 'expo-print';

/*=========== STYLES ============*/
import { styles } from './QuestionnaireScreen.style';
import QuestionView from '../../components/layout/QuestionView/QuestionView';

const questions = [
  {
    id: 1,
    question: 'Da li ste ranije davali krv?',
    options: ['Da', 'Ne'],
  },
  {
    id: 2,
    question: 'Koliko često biste željeli da dajete krv?',
    options: [
      'Jednom godišnje',
      'Dva puta godišnje',
      'Više puta godišnje',
      'Nisam siguran',
    ],
  },
  {
    id: 3,
    question: 'Koji dan u nedelji vam najviše odgovara za davanje krvi?',
    options: ['Ponedeljak', 'Srijeda', 'Petak', 'Vikendom'],
  },
];

/**
 * @name QuestionnaireScreen
 * @description This component is used to display the questionnaire screen.
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionnaireScreen = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, selectedAnswer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
  };

  const allAnswered = questions.every((q) => answers[q.id]);

  const printAnketa = async () => {
    if (!allAnswered) {
      Alert.alert('Molimo odgovorite na sva pitanja prije slanja.');
      return;
    }

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
        ${questions
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
      console.log('htmlContent', htmlContent);
      await Print.printAsync({
        html: htmlContent,
      });
    } catch (error) {
      Alert.alert('Greška', 'Štampanje nije uspjelo.');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 24, backgroundColor: '#f9f9f9' }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          marginBottom: 20,
          color: '#880808',
          textAlign: 'center',
        }}
      >
        Upitnik za davaoce krvi
      </Text>

      {questions.map((q) => (
        <QuestionView
          key={q.id}
          questionId={q.id}
          question={q.question}
          options={q.options}
          onSelect={handleAnswer}
        />
      ))}

      <TouchableOpacity
        onPress={printAnketa}
        style={{
          backgroundColor: '#880808',
          paddingVertical: 16,
          borderRadius: 16,
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
          Pošalji anketu
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default QuestionnaireScreen;
