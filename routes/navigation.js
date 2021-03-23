import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Login from "../screens/Login/LoginScreen.js";
import Register from "../screens/Register/RegistrationScreen.js";
import { StyleSheet, Text, View } from 'react-native';

const navigationStack = createStackNavigator();

const globalScreenOption = {
    headerStyle : {backgroundColor : "#2c6bed"},
    headerTitleStyle : {color : "white"},
    headerTintColor: "white",
    headerTitleAlign: 'center'
};

function navigation() {
    return(
            <NavigationContainer>
                <navigationStack.Navigator screenOptions={globalScreenOption}>
                    <navigationStack.Screen name="Login" component={Login} />
                    <navigationStack.Screen name="Register" component={Register} />
                </navigationStack.Navigator>
            </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default navigation;