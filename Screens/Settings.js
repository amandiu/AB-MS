
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsAllButton from '../Components/SettingsAllButton';
import Notification from './Notification';
import limit from './Limit';
import profilee from './Profile';

/*
import helpLile from './Help_line';
 <Stack.Screen options={{
        headerShown: false,
      }} name="display" component={display} />
<Stack.Screen options={{
        title: 'Help Line',
        headerStyle: { backgroundColor: '#fff' }
      }} name="helpLile" component={helpLile} />
      <Stack.Screen options={{
        title: 'Delete',
        headerStyle: { backgroundColor: '#fff' }
      }} name="deletee" component={deletee} />
      <Stack.Screen options={{
        title: 'Live Chat',
        headerStyle: { backgroundColor: '#fff' }
      }} name="livechat" component={livechat} />
 */




const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShon: false }}>
      <Stack.Screen options={{
        headerShown: false
      }} name="SettingsAllButton" component={SettingsAllButton} />
      <Stack.Screen options={{
        title: 'Notification',
        headerStyle: { backgroundColor: 'transparent' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} name="Notificatione" component={Notification} />
      <Stack.Screen options={{
        title: 'Profile',
        headerStyle: { backgroundColor: 'transparent' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} name="profilee" component={profilee} />
      <Stack.Screen options={{
        title: 'Limit',
        headerStyle: { backgroundColor: 'transparent' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} name="limit" component={limit} />

    </Stack.Navigator>
  );
}
export default Settings


