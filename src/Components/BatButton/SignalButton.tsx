import React from "react";
import { Button, Pressable, View, Text } from "react-native";
import {styles} from "./styles"

type Props = {
    onPress: () => void
}

export const SignalButton = ({onPress}: Props) => {
    return(
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Active Bat Signal</Text>
        </Pressable>
    )
}