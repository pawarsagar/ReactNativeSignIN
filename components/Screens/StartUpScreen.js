import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class StartUpScreen extends React.Component {
  constructor(props) {
    super(props)


    this.handlePressEvent = this.handlePressEvent.bind(this);

  }

  handlePressEvent() {
    this.props.navigation.navigate('Login')
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require('../../assets/black-circle-hi.png')}
        />
        <Text style={styles.TextFormat}>Start{"\n"}Your{"\n"}Adventure</Text>
        <View style={styles.paddingBottom}>

          <View style={styles.button}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => { this.props.navigation.navigate('Login') }}
            >
              <Text style={styles.buttonText}>
                Login
                    </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signUp}>
            <Text style={{ color: 'black' }}>
              You don't have an Account? 
                    </Text>
            <TouchableOpacity>
              <Text style={{ color: 'green', fontWeight:'bold' }} onPress={() => { this.props.navigation.navigate('SignUp') }}>
                {` SignUp Here`}
                    </Text></TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 60
  },
  TextFormat: {
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 125,
    paddingLeft: 10
  },
  paddingBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,

  },
 
  buttonContainer: {
    backgroundColor: "rgb(247,171,53)",
    paddingVertical: 10,
    borderRadius: 100,

  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#FFF',
    height: 35,
    fontSize: 20,
    position: 'relative',
    bottom: -5
  },
  button: {
    justifyContent: 'center',
    bottom: 0
  },
  signUp: {
    bottom:-25,
    justifyContent: 'center',
    flexDirection: 'row'
  }


});
