import React from "react";
import { SafeAreaView } from "react-native"
import { Text , ListItem , Avatar } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CustomListItem = () => {
    return(
        <SafeAreaView>
            <KeyboardAwareScrollView 
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false}>
            <ListItem>
                <Avatar
                     size="small"
                     rounded
                     source= {require("../assets/images/avater_icon.png")}
                     icon={{name: 'user', type: 'font-awesome'}}
                     onPress={() => console.log("Works!")}
                     />
            <ListItem.Content>
                <ListItem.Title style= {{fontWeight: "800"}}>
                   Youtube Chat 
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