import React, { useState, useLayoutEffect } from 'react';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Input , Button, Icon, Text} from 'react-native-elements';
import navigation from '../../routes/navigation';
import styles from "./RegistrationScreen_styles";
import { registration } from "../../firebase.config"


const RegistrationScreen =  ({ navigation })  => {
    const [fullName , setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation]);


    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding">
             <Text style= {{marginBottom: 50}} h3>Create account</Text>
            <View style={styles.inputContainer} >
                <Input placeholder="Full Name"
                    keyboardType="default"
                    leftIcon={
                        <Icon
                            name="person"
                            type="material"
                            color='#517fa4'
                        />
                    }
                    value={fullName}
                    onChangeText={
                        (text) => setFullName(text)
                    }
                />
                <Input placeholder="Email"
                    keyboardType="email-address"
                    leftIcon={
                        <Icon
                            name="email"
                            type="material"
                            color='#517fa4'
                        />
                    }
                    value={email}
                    onChangeText={
                        (text) => setEmail(text)
                    }
                />
                <Input placeholder="Username"
                    keyboardType="default"
                    leftIcon={
                        <Icon
                            name="account-box"
                            type="material"
                            color='#517fa4'
                        />
                    }
                    value={userName}
                    onChangeText={
                        (text) => setUserName(text)
                    }
                />
                <Input placeholder="Password"
                    secureTextEntry={true}
                    leftIcon={
                        <Icon
                            name="lock"
                            type="material"
                            color='#517fa4'
                        />
                    }
                    value={password}
                    onChangeText={
                        (text) => setPassword(text)
                    }
                />
                <Button onPress= { () => {registration(fullName, email, userName, password)}}  title="Register" />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegistrationScreen;