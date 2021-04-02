import React from "react";
import { SafeAreaView } from "react-native"
import { Text , ListItem , Avatar } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  { signout } from "../firebase.config";

const CustomListItem = ({id, chatName, enterChat}) => {
    return(
        <SafeAreaView>
            <KeyboardAwareScrollView 
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false}>
            <ListItem key={id} bottomDivider>
                <Avatar
                     size="small"
                     rounded
                     source= {require("../assets/images/avater_icon.png")}
                     icon={{name: 'user', type: 'font-awesome'}}
                     onPress={() => {signout("Login")}}
                     />
            <ListItem.Content>
                <ListItem.Title style= {{fontWeight: "800"}}>
                   {chatName} 
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines = {1} ellipsizeMode= "tail">
                    This is to test the Subtitle. This is to test the subtile. 
                    This is to test the subtile. This is to test the subtile.
                </ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

export default CustomListItem;