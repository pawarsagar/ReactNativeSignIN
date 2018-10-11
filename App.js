import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Screens/Login'
import NewAccount from './components/Screens/NewAccount'
import StartScreen from './components/Screens/StartUpScreen'


export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
     
      <MyNavigator/>
      
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    StartScreen: StartScreen,
    Login: Login,
    SignUp: NewAccount,

  },
  {
    
    headerMode:'none'
  }
);
