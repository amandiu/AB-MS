
      import React from 'react'
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      import SettingsAllButton from '../Components/SettingsAllButton';
      import Notification from './Notification';
      import profile from './Profile';
      import limit from './Limit';
      import display from './Display';



      const Stack = createNativeStackNavigator();
      
      const Settings = () => {
        return (
          <Stack.Navigator screenOptions={{ headerShon: false }}>
            <Stack.Screen options={{
              headerShown: false
            }} name="SettingsAllButton" component={SettingsAllButton} />
            <Stack.Screen options={{
              title:'Notification',  headerStyle: {
                backgroundColor: 'transparent',
                shadowColor:'#000'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} name="Notificatione" component={Notification} />
            <Stack.Screen options={{
              title:'Profile',  headerStyle: {
                backgroundColor: 'transparent',
                shadowColor:'#000'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} name="profile" component={profile} />
            <Stack.Screen options={{
              title:'Limit',  headerStyle: {
                backgroundColor: 'transparent',
                shadowColor:'#000'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} name="limit" component={limit} />
            <Stack.Screen options={{
              title:'Display',  headerStyle: {
                backgroundColor: 'transparent',
                shadowColor:'#000'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} name="display" component={display} />     
          </Stack.Navigator>
      
        );
      }
      export default Settings
      
      
      