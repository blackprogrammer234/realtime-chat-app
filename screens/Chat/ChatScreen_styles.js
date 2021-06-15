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
        padding: 15,
        alignSelf: "flex-end",
        maxWidth:"80%",
        borderRadius: 20,
        position: "relative"
    },
    sender: {
        backgroundColor: "#2B68E6",
        padding: 15,
        alignSelf: "flex-start",
        maxWidth:"80%",
        margin: 15,
        borderRadius: 20,
        position: "relative"
    },
    senderName: {
        left: 10,
        paddingRight: 10,
        fontSize: 10,
        color:"white"
    },
    receiverText : {
        color: "black",
        fontWeight: "500",
        marginLeft: 10,
    },
    senderText : {
        color: "white",
        fontWeight: "500",
        marginLeft: 10,
}

});

export default styles;