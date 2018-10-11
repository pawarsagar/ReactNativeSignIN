import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import ScrollHandler from '../ScrollHandler'


export default class NewAccount extends React.Component {
  constructor(props) {
    super(props)
    
   
 
  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.backArrow}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
            <Icon name="arrow-left" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.TextFormat}>New {"\n"}Account</Text>

        </View>

          
         <ScrollHandler />
       
       
        
         
          
        
      </View >



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(69,74,87)",

  },
  backArrow: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 65
  },

  TextFormat: {
    fontSize: 35,
    color: "white",
    fontWeight: 'bold',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 50,
    paddingLeft: 10
  },
  textInput: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 80,
    paddingBottom: 350
  },
  input: {
    borderBottomWidth: 1,
    width: 220,
    borderBottomColor: "grey",
    paddingBottom: 5,
    paddingTop: 35

  },
  

});
