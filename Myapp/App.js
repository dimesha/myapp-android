import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screen/Login';
import SignUp from './app/screen/SignUp';
import Profile from './app/screen/Profile';
import Welcome from './app/screen/Welcome';
import BatteryLevel from './app/screen/BatteryLevel';
import VoiceToText from './app/screen/VoiceToText';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name='BatteryLevel' component={BatteryLevel} options={{headerShown: false}}/>
        <Stack.Screen name='VoiceToText' component={VoiceToText} options={{headerShown: false}}/>
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    color:'#FFF',
    fontSize:30,


  }
});
