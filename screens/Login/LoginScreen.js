import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image} from 'react-native';
import {Input , Button} from 'react-native-elements'
import styles from "./LoginScreen_styles"

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
      /**
       * The line below is suppose to handle with resizing the screen when the virtual keyboard appear.
       */
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}style={styles.container}>
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
          <Button type="outline" title="Sign Up" />
        </View>
      </KeyboardAvoidingView>
    );
}

export default LoginScreen;