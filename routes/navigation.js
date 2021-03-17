import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from "../screens/LoginScreen";
import Register from "../screens/RegistrationScreen";

const navigationStack = createStackNavigator();

function navigation() {
    return(
        <NavigationContainer>
        <navigationStack.Navigator>
            <navigationStack.Screen name= "Login" component= {Login}/>
        </navigationStack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;