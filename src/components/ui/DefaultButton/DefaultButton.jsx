import { TouchableOpacity } from 'react-native';

/**
 * @name DefaultButton
 * @description A default button component that wraps a TouchableOpacity.
 * @param onPress - function to be called when the button is pressed
 * @param children - the content to be displayed inside the button
 * @param style - additional styles to be applied to the button
 * @returns {JSX.Element}
 * @example
 * <DefaultButton onPress={() => console.log('Button pressed!')}>
 *     <Text>Click Me</Text>
 * </DefaultButton>
 */
const DefaultButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      {children}
    </TouchableOpacity>
  );
};
export default DefaultButton;
