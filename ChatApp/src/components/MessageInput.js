import React, {Component} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from "react-native";


class MessageInput extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Mesaj giriniz"
                    style={styles.textInput}
                    multiline={true}
                    maxLength={255}
                    //androidde sadece kullanılabiliyor numberoflines!
                    numberOfLines={4}
                    scrollEnabled={true}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textInput: {
        fontSize:20,
        paddingHorizontal:10
    }
});

export default MessageInput;