import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*========== SCREENS ================*/
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BloodDonorsScreen from '../screens/BloodDonorsScreen/BloodDonorsScreen';
import QuestionnaireScreen from '../screens/QuestionnaireScreen/QuestionnaireScreen';
import PlateletDonorsScreen from '../screens/PlateletDonorsScreen/PlateletDonorsScreen';
import InactiveWrapper from '../components/ui/inactiveWrapper/InactiveWrapper';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const SCREENS = [
    {
      name: 'HomeScreen',
      component: HomeScreen,
      options: {
        headerShown: false,
        title: 'HomeScreen',
      },
    },
    {
      name: 'BloodDonorsScreen',
      component: BloodDonorsScreen,
      options: {
        headerShown: false,
        title: 'Blood Donors',
      },
    },
    {
      name: 'QuestionnaireScreen',
      component: QuestionnaireScreen,
      options: {
        headerShown: false,
        title: 'Questionnaire',
      },
    },
    {
      name: 'PlateletDonorsScreen',
      component: PlateletDonorsScreen,
      options: {
        headerShown: false,
        title: 'Platelet Donors',
      },
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        {SCREENS.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
