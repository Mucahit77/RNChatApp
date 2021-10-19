import React, {Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Login from "./Login";
import Home from "./Home";

class Pages extends Component {
    render() {
        return (
            <Home/>
        );
    }
}

export default Pages;