import React, {Component} from 'react';
import {Text, View, StyleSheet,Button, TouchableOpacity} from 'react-native';

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
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('7')} title = '7'>
                <Text style = {styles.buttonsText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('8')} title = '8'>
                <Text style = {styles.buttonsText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('9')} title = '9'>
                <Text style = {styles.buttonsText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowOfNumbers}>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('4')} title = '4'>
                <Text style = {styles.buttonsText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('5')} title = '5'>
                <Text style = {styles.buttonsText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('6')} title = '6'>
                <Text style = {styles.buttonsText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowOfNumbers}>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('1')} title = '1'>
                <Text style = {styles.buttonsText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('2')} title = '2'>
                <Text style = {styles.buttonsText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('3')} title = '3'>
                <Text style = {styles.buttonsText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowOfNumbers}>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('0')} title = '0'>
                <Text style = {styles.buttonsText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('.')} title = '.'>
                <Text style = {styles.buttonsText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.result()} title = '='>
                <Text style = {styles.buttonsText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {styles.operators}>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('CLEAR')} title = 'CLEAR'>
                <Text style = {styles.buttonsText}>CLC</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('+')} title = '+'>
                <Text style = {styles.buttonsText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('-')} title = '-'>
                <Text style = {styles.buttonsText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('*')} title = '*'>
                <Text style = {styles.buttonsText}>x</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btn} onPress = {() => this.buttonPressed('/')} title = '/'>
                <Text style = {styles.buttonsText}>/</Text>
              </TouchableOpacity>
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

  btn:{
    flex:1,
    alignItems:'center',
    alignItems: 'stretch',
    justifyContent: 'center'
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
    fontSize: 60,
  },

  textResult:{
    fontSize: 40,
    color: 'grey',
  },

  rowOfNumbers:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  buttonsText:{
    fontSize: 30,
    color: 'black',
  },

});