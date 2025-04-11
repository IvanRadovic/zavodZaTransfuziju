import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/*============ STYLES ==============*/
import { styles } from './QuestionVieew.style';

const letters = ['a', 'b', 'c', 'd', 'e'];

/**
 * @name QuestionView
 * @description This component is used to display a question with multiple choice answers.
 * @param questionId - The id of the question
 * @param question - The question text
 * @param options - The options for the question
 * @param onSelect - The function to call when an option is selected
 * @returns {JSX.Element}
 */
const QuestionView = ({ questionId, question, options, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handlePress = (key) => {
    setSelected(key);
    onSelect(questionId, key);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      <View style={styles.answerContainer}>
        {options.map((option, index) => {
          const key = letters[index];
          const isChecked = selected === key;

          return (
            <TouchableOpacity
              key={key}
              onPress={() => handlePress(key)}
              style={[
                styles.answerItem,
                {
                  backgroundColor: isChecked ? '#fdd' : '#f5f5f5',
                  borderColor: isChecked ? '#880808' : '#ccc',
                },
              ]}
            >
              <MaterialCommunityIcons
                name={
                  isChecked
                    ? 'checkbox-marked-circle'
                    : 'checkbox-blank-circle-outline'
                }
                size={24}
                color={isChecked ? '#880808' : '#888'}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 14 }}>{`${option}`}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default QuestionView;
