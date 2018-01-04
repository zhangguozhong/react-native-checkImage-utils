/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';

import RNCheckImageUtils from 'react-native-check-image'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props){
    super(props);
  }

  componentDidMount(){
      RNCheckImageUtils.check('hao',(error,result)=>{
        console.log(result);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
          <TouchableOpacity
              onPress={()=>{
                  RNCheckImageUtils.checkCamera('').then((result)=>{
                      console.log(result);
                  }).catch((err)=>{
                      console.log(err.code);
                  });
              }}
          >
              <Text style={styles.textButton}>点击我</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    textButton:{
      fontSize:17,
        color:'orange'
    }
});
