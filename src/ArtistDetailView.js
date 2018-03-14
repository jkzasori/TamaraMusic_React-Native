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


export default class ArtistDetailView extends Component {

  render() {
    const artist = this.props.artist;
    
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede9df',
    paddingTop: 50,
  }
  
});
