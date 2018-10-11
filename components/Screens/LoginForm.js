import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Username: "user1@gmail.com",
            Password: "password@Admin",
            UsrInput: null,
            PwdInput: null,
            focusUR: false,
            focusPW: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {
        if (this.state.Username === this.state.UsrInput && this.state.Password === this.state.PwdInput) {
            console.log("Correct credentials ")

        }
        else {
            console.log("Incorrect")
        }


    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"

                />
                <View style={[styles.Username, { borderBottomColor: this.state.focusUR ? 'orange' : 'grey' }]}>
                    <Icon name="user" size={20} color="#fff" />
                    <TextInput
                        placeholder="Username or Email-Id"
                        onFocus={() => { this.setState({ focusUR: true }) }}
                        onBlur={() => { this.setState({ focusUR: false }) }}
                        placeholderTextColor="#FFF"
                        returnKeyType="next"
                        clearTextOnFocus={true}
                        style={styles.input}
                        onSubmitEditing={() => { this.passwordInput.focus() }}
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(e) => { this.setState({ UsrInput: e }) }}
                    >

                    </TextInput>
                </View>
                <View style={[styles.paswword,{borderBottomColor: this.state.focusPW ? 'orange' : 'grey'}]}>
                    {<Icon name="lock" size={20} color="#fff" />}
                    <TextInput
                        onFocus={() => { this.setState({ focusPW: true }) }}
                        onBlur={() => { this.setState({ focusPW: false }) }}
                        secureTextEntry
                        placeholder="Password"
                        returnKeyType="next"
                        placeholderTextColor="#FFF"
                        style={styles.passInput}
                        ref={(input) => { this.passwordInput = input }}
                        onChangeText={(p) => { this.setState({ PwdInput: p }) }}
                    >

                    </TextInput>  </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.buttonText}>
                            Login
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUp}>
                    <Text style={{ color: 'white' }}>
                        First Time Here?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'aqua' }} onPress={() => { this.props.navigation.navigate('SignUp') }}>
                            {` SignUp`}
                        </Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withNavigation(LoginForm);
const styles = StyleSheet.create({
    container: {
        paddingBottom: 300,
        padding: 65

    },
    input: {
        width: 250,
        height: 30,
        paddingHorizontal: 10,
        color: 'white'

    },

    buttonContainer: {
        backgroundColor: "black",
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
    paswword: {
        height: 25,
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        marginBottom: 7,
        flexDirection: 'row',
        bottom: -35,



    },
    button: {
        justifyContent: 'center',
        bottom: -65
    },
    passInput: {

        width: 250,
        paddingHorizontal: 10,
        color: 'white'
    },
    Username: {

        borderBottomWidth: 1,
        borderBottomColor: "orange",
        marginBottom: 7,
        flexDirection: 'row',
    },
    signUp: {
        bottom: -90,
        justifyContent: 'center',
        flexDirection: 'row'
    }



});
