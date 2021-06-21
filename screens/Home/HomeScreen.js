import React, { useEffect , useLayoutEffect, useState } from 'react';
import { SafeAreaView, View, TouchableOpacity} from "react-native"
import { Text , ListItem , Avatar } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomListItem from "../../components/CustomListItem.js";
import  { auth, db, signout } from "../../firebase.config";
import { AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import { HeaderTitle } from '@react-navigation/stack';
import { Icon , Button } from "react-native-elements";
import Styles from "./HomeScreen_styles.js"


const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([]);
    const signOutUser = () => {
        signout();
        navigation.replace("Login")
    };

    useEffect(() => {
        const unsubscribe = db.collection("chat").onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ));
        return unsubscribe;
    },[])
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Realtime-chat-app",
            headerTitleAlign: "center",
            headerLeft: () => (
                <View style={{ marginLeft: 20}}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                    <Avatar rounded source={{uri: auth?.currentUser?.photoURL}}/>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style= {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} 
                    onPress= {()=> {
                        navigation.navigate("AddChat")
                    }}>
                        <SimpleLineIcons name="pencil" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
            )
        })
    });

    const enterChatName = (id, chatName) => {
        navigation.navigate("Chat" , {
            id: id,
            chatName: chatName
        })
    };
    return(
     <SafeAreaView style= {Styles.container}> 
     {chats.map(({id, data: {chatName}}) => (
        <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChatName}/>
     ))}
     </SafeAreaView>
    );
}

export default HomeScreen;