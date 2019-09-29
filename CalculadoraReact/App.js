import React, {Component} from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';

export default class Calculator extends Component{
  
  buttonPressed(text){
    this.setState({
      textOperation: this.state.textOperation+text
    })

    if(text == 'CLEAR'){
      this.setState({
        textOperation: '',
        textResult: ''
      })
    }
  }

  result(){
    let operation = eval(this.state.textOperation)
    this.setState({
      textResult: operation
    })
  }


  constructor(){
    super();
    this.state = {textOperation: '', textResult: ''};
  }

  render(){
    return (
      <View style={{flex:1}}>

        <View style={styles.display}>
          <View style={styles.calculation}>
            <Text style={styles.textOperation}>{this.state.textOperation}</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.textResult}>{this.state.textResult}</Text>
          </View>
        </View>

        <View style= {styles.buttons}>
          <View style = {styles.numbers}>
            <View style={styles.rowOfNumbers}>
              <Button onPress = {() => this.buttonPressed('7')} title = '7'/>
              <Button onPress = {() => this.buttonPressed('8')} title = '8'/>
              <Button onPress = {() => this.buttonPressed('9')} title = '9'/>
            </View>
            <View style={styles.rowOfNumbers}>
              <Button onPress = {() => this.buttonPressed('4')} title = '4'/>
              <Button onPress = {() => this.buttonPressed('5')} title = '5'/>
              <Button onPress = {() => this.buttonPressed('6')} title = '6'/>
            </View>
            <View style={styles.rowOfNumbers}>
              <Button onPress = {() => this.buttonPressed('1')} title = '1'/>
              <Button onPress = {() => this.buttonPressed('2')} title = '2'/>
              <Button onPress = {() => this.buttonPressed('3')} title = '3'/>
            </View>
            <View style={styles.rowOfNumbers}>
              <Button onPress = {() => this.buttonPressed('0')} title = '0'/>
              <Button onPress = {() => this.buttonPressed('.')} title = '.'/>
              <Button onPress = {() => this.result()} title = '='/>
            </View>
          </View>
          <View style = {styles.operators}>
            <Button onPress = {() => this.buttonPressed('CLEAR')} title = 'CLEAR'/>
            <Button onPress = {() => this.buttonPressed('+')} title = '+'/>
            <Button onPress = {() => this.buttonPressed('-')} title = '-'/>
            <Button onPress = {() => this.buttonPressed('*')} title = 'x'/>
            <Button onPress = {() => this.buttonPressed('/')} title = '/'/>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  display:{
    flex:1,
  },

  buttons:{
    flex:3,
    flexDirection: 'row',
  },

  calculation:{
    flex:1,
    backgroundColor: 'skyblue'
  },

  result:{
    flex:1,
    backgroundColor: 'powderblue',
  },

  numbers:{
    flex: 3,
    backgroundColor: 'steelblue',
  },

  operators:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textOperation:{
    fontSize: 40,
  },

  textResult:{
    fontSize: 30,
    color: 'grey',
  },

  rowOfNumbers:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});