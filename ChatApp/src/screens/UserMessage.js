import React, {Component} from 'react';
import {FlatList, SafeAreaView, TextInput, View, StyleSheet, TouchableOpacity, Text, Dimensions} from "react-native";
import MessageInput from "../components/MessageInput";
import MessageButton from "../components/MessageButton";
let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

class UserMessage extends Component {
    state = {
        message : '',
        usersId : '',
        messageId : '',

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity >
                        <Text>Hello!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mInput}>
                    <MessageInput style={styles.input} />
                    <MessageButton style={styles.button} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
        flexDirection: 'column',
    },
    content: {
      flex:12,
    },
    mInput: {
        flexDirection: "row",
        flex:1,
        justifyContent: 'space-between',
        borderWidth:1,
        borderColor: '#00f8da'
    },
    input: {
        flex: 4,

    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#00f8da',
        borderStyle: 'solid',
    },
});

export default UserMessage;