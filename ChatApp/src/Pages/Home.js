import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, Button, TextInput} from "react-native";

class Home extends Component {
    const message = React.useState;
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput style={styles.input} onChangeText={this.setState{
                    message
                }}/>
                <Text style={styles.text}>{message}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        flex:1,
        width: "100%"
    },
    text: {
        flex:1
    }
});

export default Home;