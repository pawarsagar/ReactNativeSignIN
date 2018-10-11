import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';


class ScrollHandler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageCycyle: 0,
            buttonName: 'Next',
            stateButton: true,
            fontValueFocused: 25,
            fontValueNormal: 15,
            focusUR: false,
            focusPW: false

        }


        this.handleButton = this.handleButton.bind(this);
        this.goBack = this.goBack.bind(this);
        this.jewelStyle = this.jewelStyle.bind(this);

    }


    handleButton() {

        if (this.state.buttonName == 'Submit') {

            alert("You Form is submitted")
        }
        else {
            if (this.state.pageCycyle == 0) {
                this.scrollView.scrollToEnd()
                this.setState({
                    pageCycyle: 1,
                    buttonName: 'Submit',
                    stateButton: false,
                    focusUR: false,
                    focusPW: false
                })


            }

        }
    }
    jewelStyle(a) {
        return styles = StyleSheet.create({
            fontSize: 55
        })
    }
    goBack() {
        this.setState({
            pageCycyle: 0,
            buttonName: 'Next',
            stateButton: true,

        })
        this.scrollView.scrollTo({ x: 0, y: 0, animated: true })
        console.log(this.state.stateButton)

    }


    render() {

        return (
            <View style={styles.container} >
                <View style={styles.numberContainer}>

                    <Text style={this.state.pageCycyle == 0 ? styles.numberStyle1 : styles.numberStyle}>1</Text>
                    <Text style={{ fontSize: 15, color: "cyan", fontWeight: 'bold', }}>/</Text>
                    <Text style={this.state.pageCycyle == 1 ? styles.numberStyle1 : styles.numberStyle}>2</Text>


                    <Text style={{ fontSize: 15, color: "white", fontWeight: 'bold', justifyContent: 'flex-end', }}> Steps</Text>


                </View>
                
                <ScrollView ref={scrollView => this.scrollView = scrollView} horizontal={true}>
                    <View style={{ justifyContent: 'space-evenly', marginRight: 99 }}>
                        <View style={[styles.TextInput, { borderBottomColor: this.state.focusUR ? 'orange' : 'grey' }]}>
                            <Icon name="user" size={20} color="#fff" />
                            <TextInput
                                onFocus={() => { this.setState({ focusUR: true }) }}
                                onBlur={() => { this.setState({ focusUR: false }) }}
                                placeholder="Name"
                                placeholderTextColor="#FFF"
                                returnKeyType="next"
                                clearTextOnFocus={true}
                                style={styles.input}
                                onSubmitEditing={() => { this.emailInput.focus() }}
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={(e) => { this.setState({ UsrInput: e }) }}
                            >

                            </TextInput>
                        </View>
                        <View style={[styles.TextInput, { borderBottomColor: this.state.focusPW ? 'orange' : 'grey' }]}>
                            <Icon name="envelope" size={20} color="#fff" />
                            <TextInput
                                keyboardType="email-address"
                                placeholder="Email"
                                onFocus={() => { this.setState({ focusPW: true }) }}
                                onBlur={() => { this.setState({ focusPW: false }) }}
                                returnKeyType="next"
                                placeholderTextColor="#FFF"
                                style={styles.passInput}
                                ref={(input) => { this.emailInput = input }}
                                onChangeText={(p) => { this.setState({ PwdInput: p }) }}
                                onSubmitEditing={() => { this.PhoneNumber.focus() }}
                            >

                            </TextInput>

                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-evenly', marginRight: 99 }}>
                        <View style={[styles.TextInput, { borderBottomColor: this.state.focusUR ? 'orange' : 'grey' }]}>
                            <Icon name="mobile" size={25} color="#fff" />
                            <TextInput
                                placeholder="Mobile Number "
                                keyboardType='number-pad'
                                placeholderTextColor="#FFF"
                                returnKeyType="next"
                                onFocus={() => { this.setState({ focusUR: true }) }}
                                onBlur={() => { this.setState({ focusUR: false }) }}
                                ref={(input) => { this.PhoneNumber = input }}
                                clearTextOnFocus={true}
                                style={styles.input}
                                onSubmitEditing={() => { this.passwordInput.focus() }}
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={(e) => { this.setState({ UsrInput: e }) }}
                            >

                            </TextInput>
                        </View>
                        <View style={[styles.TextInput, { borderBottomColor: this.state.focusPW ? 'orange' : 'grey' }]}>
                            <Icon name="lock" size={20} color="#fff" />
                            <TextInput
                                secureTextEntry
                                onFocus={() => { this.setState({ focusPW: true }) }}
                                onBlur={() => { this.setState({ focusPW: false }) }}
                                placeholder="Choose Password Wisely"
                                returnKeyType="go"
                                placeholderTextColor="#FFF"
                                style={styles.passInput}
                                ref={(input) => { this.passwordInput = input }}
                                onChangeText={(p) => { this.setState({ PwdInput: p }) }}
                            >

                            </TextInput>

                        </View>
                    </View>
                </ScrollView>
                <View style={styles.previousButton}>
                    <Text style={{ color: 'white' }}>
                        Nedd to Verify Previous Details?
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableWithoutFeedback disabled={this.state.stateButton} >
                            <Text style={{ color: 'aqua', }} onPress={this.goBack}>
                                {` Click Here `}
                            </Text>
                            
                            </TouchableWithoutFeedback>
                            <TouchableOpacity>
                            <Text style={{ color: 'orange'}} onPress={()=>{this.props.navigation.navigate('Login')}}>
                                {` or Login Here `}
                            </Text>
                            </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.handleButton}
                    >
                        <Text style={styles.buttonText}>
                            {this.state.buttonName}
                        </Text>
                    </TouchableOpacity>
                </View>

                
            </View>


        )
    }


}
export default withNavigation(ScrollHandler);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "black",
        paddingBottom: 250,
        paddingLeft: 95
    },
    input: {
        width: 250,
        height: 30,
        paddingHorizontal: 10,
        color: 'white'

    },
    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        marginBottom: 35,
        flexDirection: 'row',
        width: 220,
        justifyContent: 'flex-start'
    },

    passInput: {

        width: 250,
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
    button: {
        flex: 1,
        justifyContent: 'flex-start',
        bottom: -65,
        paddingRight: 75
    },
    previousButton: {
        bottom: -55,
        paddingRight: 82,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    
    numberStyle: {

        fontSize: 10,
        color: "white",
        fontWeight: 'bold',
    },
    numberStyle1: {

        fontSize: 25,
        color: 'orange',
        fontWeight: 'bold',
    },
    numberContainer: {
        flexDirection: 'row',
        top: -165,
        justifyContent: 'flex-end',
        paddingRight: 55,
    }

});

