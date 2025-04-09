import { Text, View } from 'react-native';

const AnswerContent = ({ answer }) => {
  return (
    <View>
      <Text style={{ fontSize: 16, color: '#333' }}>{answer}</Text>
    </View>
  );
};

export default AnswerContent;
