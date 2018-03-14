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

type Props = {};
export default class HomeView extends Component<Props> {
  state ={
    artists: []
  }
  componentDidMount() {
    getArtists().then((data) => this.setState({ artists: data}))
  }

  render() {
    
    const artists = this.state.artists;
    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
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
