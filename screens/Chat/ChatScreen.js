import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import {Text, View, StyleSheet} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import { SafeAreaView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { TextInput } from "react-native";
import styles from "./ChatScreen_styles.js"
import { Keyboard } from "react-native";
import { db , auth } from "../../firebase.config.js";
import * as firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from "react-native";

const ChatScreen = ({navigation , route}) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    useLayoutEffect(() =>{
        navigation.setOptions({
            title: route.params.chatName,
            headerBackTitleVisible: false,
            headerTitleAlign:"left",
            headerTitle: () => (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <Avatar
                     size="small"
                     rounded
                     source= {require("../../assets/images/avater_icon.png")}
                     icon={{name: 'user', type: 'font-awesome'}}
                     />
                <Text style={{color: "white", marginLeft: 10, fontWeight: "700"}}>{route.params.chatName}</Text>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 60,
                    marginRight: 20
                }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Icon name="videocam" type= "material" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Icon name="call" type= "material" size={24} color="white"/>
                </TouchableOpacity>
                </View>
            )
        })

    });
    const sendMessage = () => {
        Keyboard.dismiss;
        db.collection('chat').doc(route.params.id).collection('message').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email
        });
        setInput("")
    }

    useLayoutEffect(()=> {
        const unsubscribe = 
        db
        .collection('chat')
        .doc(route.params.id)
        .collection('message')
        .orderBy('timestamp',"desc")
        .onSnapshot(snapshot => setMessages(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))
        ))
        return unsubscribe;
    },[route]);

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}>
                    <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
                    <>
                    <ScrollView contentContainerStyle= {{padding: 15}}>
                        {
                            messages.map(({id,data}) => (
                                data.email === auth.currentUser.email ? (
                                    <View key={id} style={styles.receiver}>
                                        <Avatar
                                            position="absolute"
                                            rounded
                                            bottom={-15}
                                            right={-5}
                                            size={30}
                                            source= {require("../../assets/images/avater_icon.png")}
                                        />
                                        <Text style={styles.receiverText}>{data.message}</Text>
                                    </View>
                                ):
                                (
                                    <View key={id} style={styles.sender}>
                                         <Avatar
                                            position="absolute"
                                            rounded
                                            bottom={-15}
                                            left={-5}
                                            size={30}
                                            source= {require("../../assets/images/avater_icon.png")}
                                        />
                                        <Text style={styles.senderText}>{data.message}</Text>
                                        <Text style={styles.senderName}>{data.displayName}</Text>
                                    </View>
                                )
                            ))
                        }
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput 
                            value={input}
                            onChangeText={(text) => setInput(text)}
                            placeholder="Message"
                            onSubmitEditing={sendMessage}
                            style={styles.textInput}
                            />   
                            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                                <Icon name="send" type= "material" size={24} color="#2c6bed"/>
                            </TouchableOpacity>
                    </View>
                    </>
                    </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}



export default ChatScreen;