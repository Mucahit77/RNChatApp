import React, {Component} from 'react';
import {Button, StyleSheet, View} from "react-native";

class MessageButton extends Component {
    render() {
        return (
            <View>
                <Button title={"Gönder"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myButton: {

    },
});
export default MessageButton;