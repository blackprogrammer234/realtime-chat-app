import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import {Text, View, StyleSheet} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import { SafeAreaView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { TextInput } from "react-native";
import styles from "./ChatScreen_styles.js"

const ChatScreen = ({navigation , route}) => {
    const [message, setMessage] = useState("")
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
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}>
                    <View style={styles.footer}>
                        <TextInput 
                            value={message}
                            onChangeText={(text) => setMessage(text)}
                            placeholder="Message"
                            style={styles.textInput}
                            />   
                            <TouchableOpacity activeOpacity={0.5}>
                                <Icon name="send" type= "material" size={24} color="#2c6bed"/>
                            </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}



export default ChatScreen;