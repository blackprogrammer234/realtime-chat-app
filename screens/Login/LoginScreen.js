import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image} from 'react-native';
import {Input , Button} from 'react-native-elements';
import styles from "./LoginScreen_styles";
import  { auth } from "../../firebase.config";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        console.log(authUser);
        if(authUser){
          navigation.replace("Home")
        }
      });
      return unsubscribe;
    }, []);

    return(
      /**
       * The line below is suppose to handle with resizing the screen when the virtual keyboard appear.
       */
       <KeyboardAwareScrollView style={{ backgroundColor: '#4c69a5' }}
       resetScrollToCoords={{ x: 0, y: 0 }}
       contentContainerStyle={styles.container}
       scrollEnabled={false}>
        <Image source= {
          require("../../assets/images/realtime_chat_icon.png")
        }
        style= {{width : 200 , height : 200}}
        />
        <View style= {{height : 50}}/>
        <View style={styles.inputContainer}>
          <Input placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={
              (text) => setEmail(text)
            }
          />
          <Input placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={
              (text) => setPassword(text)
            }
          />
          <Button title="Login" />
          <Button onPress = {() => navigation.navigate('Register')}  type="outline" title="Sign Up" />
        </View>
      </KeyboardAwareScrollView>
    );
}

export default LoginScreen;