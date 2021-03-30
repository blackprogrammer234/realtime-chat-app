import React, {useLayoutEffect, useState} from "react"
import {View, StyleSheet, Text} from "react-native"
import Styles from "./AddChatScreen_styles"
import {Input , Button, Icon} from 'react-native-elements';
import { db } from "../../firebase.config";

const AddChatScreen = ({navigation}) => {
    const [input , setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat"
        })
    },[navigation]);

    const createChat = async () => {
        await db.collection('chat').add({
            chatName :  input
        }).then(() => {
            navigation.goBack()
        }).catch((error) => alert(error));
    }

    return ( 
        <View style= {Styles.container}>
            <Input placeholder= "Enter the chat name" 
                value= {input}
                onChangeText= {(text) => setInput(text)}
                leftIcon= {
                    <Icon name="chat-bubble-outline" type="material" size={24} color="black"/>
                }
                />
                <Button onPress= {createChat} title= "Create a new chat"/>
        </View>
    )
}

export default AddChatScreen;