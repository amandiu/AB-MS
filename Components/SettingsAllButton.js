import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import Settings from './SettingsButton'
import Ticket from '../assets/ticket.png'
import About from '../assets/About.png'
import LiveChat from '../assets/liveChat.png'
import Display from '../assets/Display.png'
import Delete from '../assets/Delete.png'
import Help from '../assets/help-line.png'
import Limit from '../assets/limitation-icon-0.jpg'
import notification from '../assets/notification.png'
import privacy from '../assets/privacy.png'
import profileImg from '../assets/profile.png'
import Bus from '../assets/seat-top-view-removebg-preview.png'



const SettingsAllButton = ({ navigation }) => {
  return (
    <View style={styles.SettingsBo}>
      <Settings title='Profile Edit' imageIcon={profileImg} onPress={() => navigation.navigate("profilee")}></Settings>
      <Settings title='Buy Tickets' imageIcon={Ticket} onPress={() => navigation.navigate("")}></Settings>
      <Settings title='About' imageIcon={About} onPress={() => navigation.navigate("about")}></Settings>
      <Settings title='Live Chat' imageIcon={LiveChat} onPress={() => navigation.navigate("livechat")}></Settings>
      <Settings title='Privacy' imageIcon={privacy} onPress={() => navigation.navigate("")}></Settings>
      <Settings title='Display' imageIcon={Display} onPress={() => navigation.navigate("")}></Settings>
      <Settings title='Limit' imageIcon={Limit} onPress={() => navigation.navigate("limit")}></Settings>
      <Settings title='Help Line' imageIcon={Help} onPress={() => navigation.navigate("helpLile")}></Settings>
      <Settings title='Notification' imageIcon={notification} onPress={() => navigation.navigate("Notificatione")}></Settings>
      <Settings title='Delete Account' imageIcon={Delete} onPress={() => navigation.navigate("ddelete")}></Settings>
      <Settings title='Bus Site System' imageIcon={Bus} onPress={() => navigation.navigate("")}></Settings>
    </View>
  )
}

export default SettingsAllButton

const styles = StyleSheet.create({
  SettingsBo: {
    marginTop: '20%'
  }
});