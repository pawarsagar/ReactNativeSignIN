import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import LoginForm from './LoginForm'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
      isFocusedPwd: false
    }

    this.handlePressEvent = this.handlePressEvent.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handlePressEvent() {
    this.props.navigation.navigate('SignUp')
  }
  handleFocus = () => this.setState({ isFocused: true })

  handleBlur = () => this.setState({ isFocused: false })


  render() {
    return (

      <View style={styles.container}>

        <View style={styles.backArrow}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
            <Icon name="arrow-left" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.TextFormat}>Login</Text>

        </View>
       
        
          <LoginForm />
        
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
