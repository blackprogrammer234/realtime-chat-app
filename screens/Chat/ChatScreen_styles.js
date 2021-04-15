import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: "transparent",
        backgroundColor: "#ECECEC",
        borderWidth: 1, 
        padding: 10,
        color: "grey",
        borderRadius: 30
    },
    receiver: {
        marginRight: 15,
        marginBottom: 20,
        backgroundColor: "#ECECEC",
        borderWidth: 1, 
        padding: 15,
        alignSelf: "flex-end",
        maxWidth:"80%",
        borderRadius: 20,
        position: "relative"
    },
    sender: {
        marginLeft: 15,
        marginBottom: 20,
        backgroundColor: "#2B68E6",
        padding: 15,
        alignSelf: "flex-start",
        maxWidth:"80%",
        margin: 15,
        borderRadius: 20,
        position: "relative"
    },

    receiverText : {

    },
    senderText : {

}

});

export default styles;