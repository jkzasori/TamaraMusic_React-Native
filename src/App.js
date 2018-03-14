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
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';
import ArtistList from './ArtistList';
import { getArtists } from './API-client';
import {Scene, Router, Stack } from 'react-native-router-flux';
import HomeView from './HomeView';
import ArtistDetail from './ArtistDetailView';
import LoginView from './LoginView';

export default class App extends Component {
  
  render() {
    
  
    return (
       <Router>
        <Stack key="root">
          <Scene key="Login" component={LoginView} title="Login" hideNavBar/>          
          <Scene key="Home" component={HomeView} title="Login" hideNavBar/>
          <Scene key="artistDetail" component={ArtistDetail} title="" />
        </Stack>
      </Router>
    );
  }
}


