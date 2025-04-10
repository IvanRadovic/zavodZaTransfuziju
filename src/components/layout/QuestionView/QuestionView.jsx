import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const letters = ['a', 'b', 'c', 'd', 'e'];

const QuestionView = ({ questionId, question, options, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handlePress = (key) => {
    setSelected(key);
    onSelect(questionId, key);
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          marginBottom: 16,
          color: '#880808',
        }}
      >
        {question}
      </Text>
      {options.map((option, index) => {
        const key = letters[index];
        const isChecked = selected === key;

        return (
          <TouchableOpacity
            key={key}
            onPress={() => handlePress(key)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: isChecked ? '#fdd' : '#f5f5f5',
              padding: 12,
              borderRadius: 12,
              marginBottom: 10,
              borderColor: isChecked ? '#880808' : '#ccc',
              borderWidth: 1,
            }}
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
            <Text style={{ fontSize: 16 }}>{`${key}) ${option}`}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default QuestionView;
