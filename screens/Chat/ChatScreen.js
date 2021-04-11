import React, { useLayoutEffect } from "react";
import {Text, View, StyleSheet} from "react-native";
import { Avatar } from "react-native-elements";

const ChatScreen = ({navigation , route}) => {
    useLayoutEffect(() =>{
        navigation.setOptions({
            title: route.params.chatName,
            headerBackTitleVisible: false,
            headerTitleAlign:"left",
          
        })

    });
    return(
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ChatScreen;