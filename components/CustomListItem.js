import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native"
import { Text , ListItem , Avatar } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { db , auth, signout } from "../firebase.config";

const CustomListItem = ({id, chatName, enterChat}) => {
    const [chatMessages, setChatMessages] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection('chat').doc(id).collection('message').
            orderBy('timestamp','desc').onSnapshot(snapshot => (
                setChatMessages(snapshot.docs.map(doc => doc.data()))
            ));
        return unsubscribe;
    })
    return(
        <SafeAreaView>
            <KeyboardAwareScrollView 
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false}>
            <ListItem key={id} onPress={() => enterChat(id,chatName)} bottomDivider>
                <Avatar
                     size="small"
                     rounded
                     source= {{
                         uri: chatMessages?.[0]?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                     }}
                     icon={{name: 'user', type: 'font-awesome'}}
                     />
            <ListItem.Content>
                <ListItem.Title style= {{fontWeight: "800"}}>
                   {chatName} 
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines = {1} ellipsizeMode= "tail">
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

export default CustomListItem;