import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

export default function Homepage({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Homepage!</Text>
            <View style={styles.button}>
                <Button style={styles.buttonText} title="Register" onPress={()=>navigation.navigate("Register")}
                color={" rgba(114, 116, 117, 1)"}/>

            </View>

            <View style={styles.button}>
                <Button style={styles.buttonText} title="View User" onPress={()=>navigation.navigate("UserList")}
                color={" rgba(114, 116, 117, 1)"}/>
            </View>
        </View>

    );
}