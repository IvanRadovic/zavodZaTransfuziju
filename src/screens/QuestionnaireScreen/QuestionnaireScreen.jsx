import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import * as Print from 'expo-print';

/*=========== STYLES ============*/
import { styles } from './QuestionnaireScreen.style';

/*=========== Component ============*/
import QuestionView from '../../components/layout/QuestionView/QuestionView';

/*=========== CONSTANTS ============*/
import { basicQuestions, womenQuestions } from './constants';

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

  const allAnswered = basicQuestions.every((q) => answers[q.id]);

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
      contentContainerStyle={{ padding: 80, backgroundColor: '#f9f9f9' }}
    >
      <View>
        <Text style={styles.headerText}>POPUNJAVA DAVALAC KRVI</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Molimo Vas da pažljivo pročitate i iskreno odgovorite na svako
            pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti
            transfuziološkog liječenja bolesnika. Vaši odgovori, kao i svi
            ostali podaci o Vama su potpuno povjerljivi (ljekarska tajna) i
            koristiće se samo za potrebe transfuziološkog službe.
          </Text>
        </View>
      </View>

      {basicQuestions.map((q) => (
        <QuestionView
          key={q.id}
          questionId={q.id}
          question={q.question}
          options={q.options}
          onSelect={handleAnswer}
        />
      ))}

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Za žene</Text>
      </View>

      {womenQuestions.map((q) => (
        <QuestionView
          key={q.id}
          questionId={q.id}
          question={q.question}
          options={q.options}
          onSelect={handleAnswer}
        />
      ))}

      <TouchableOpacity onPress={printAnketa} style={styles.sendSurveyButton}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
          Pošalji anketu
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default QuestionnaireScreen;
