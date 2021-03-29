import React, { useEffect , useLayoutEffect } from 'react';
import { SafeAreaView, View, TouchableOpacity} from "react-native"
import { Text , ListItem , Avatar } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomListItem from "../../components/CustomListItem.js";
import  { signout } from "../../firebase.config";
import { AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import { HeaderTitle } from '@react-navigation/stack';
import { Icon , Button } from "react-native-elements";

const HomeScreen = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Realtime-chat-app",
            headerTitleAlign: "left",
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
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
            )
        })
    });
    return(
     <CustomListItem/>
    );
}

export default HomeScreen;