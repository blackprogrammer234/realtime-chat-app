import React, { useEffect } from 'react';
import { SafeAreaView, View } from "react-native"
import { Text , ListItem , Avatar } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomListItem from "../../components/CustomListItem.js"

const HomeScreen = ({navigation}) => {
    useEffect(() =>{
        navigation.setOptions({
            title: "Realtime-Chat-App",
            headerLeft: () => {
                <View style={{marginLeft: 20}}>
                    <Avatar rounded source={require("../../assets/images/avater_icon.png")}/>
                </View>
            }
        });
    },[]);

    return(
     <CustomListItem/>
    );
}

export default HomeScreen;