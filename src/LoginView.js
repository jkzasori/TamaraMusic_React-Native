/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';


import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';
import ArtistList from './ArtistList';
import { getArtists } from './API-client';


export default class LoginView extends Component {
 
  state = {
    credentials: null
  }

  componentWillMount() {
    this.authenticateUser()
  }

  authenticateUser = () => {
    this.setState({ loading: true })
    AccessToken.getCurrentAccessToken().then((data) => {
      if (!data) {
        this.setState({ loading: false })
        return
      }
      const { accessToken } = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseAuth.signInWithCredential(credential).then((credentials) => {
        Actions.root()
      }, (error) => {
        this.setState({ loading: false })
        console.log("Sign In Error", error);
      });
    })
  }

  handleLoginFinished = (error, result) => {
    if (error) {
      console.error(error)
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      this.authenticateUser()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to TamaraMusic</Text>
        
        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede9df',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  }
  
});
