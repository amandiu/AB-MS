/*
        <Stack.Screen options={{
          headerShown: false,
        }} name="deletee" component={Delete} />
        <Stack.Screen options={{
          headerShown: false,
        }} name="helpline" component={Help_line} />
        <Stack.Screen options={{
          headerShown: false,
        }} name="limit" component={Limit} />
        <Stack.Screen options={{
          headerShown: false,
        }} name="liveChat" component={Live_Chat} />
        <Stack.Screen options={{
        title: 'Help Line'
      }}  name="Helpline" component={Helpline} />
       
 */
      import React from 'react'
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      import SettingsAllButton from '../Components/SettingsAllButton';
      import Notification from './Notification';
      import profile from './Profile';
      import limit from './Limit';
      import display from './Display';
      import delet from './Delete';
      import helpLile from './Help_line';
      import livechat from './Live_Chat';
      
      const Stack = createNativeStackNavigator();
      
      const Settings = () => {
        return (
          <Stack.Navigator screenOptions={{ headerShon: false }}>
            <Stack.Screen options={{
              headerShown: false
            }} name="SettingsAllButton" component={SettingsAllButton} />
            <Stack.Screen options={{
              headerShown: false,
            }} name="Notificatione" component={Notification} />
            <Stack.Screen options={{
              headerShown: false,
            }} name="profile" component={profile} />
            <Stack.Screen options={{
              headerShown: false,
            }} name="limit" component={limit} />
            <Stack.Screen options={{
              headerShown: false,
            }} name="display" component={display} />     
          </Stack.Navigator>
      
        );
      }
      export default Settings
      
      
      