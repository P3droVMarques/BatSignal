import React from "react";
import { Button, Pressable, View, Text } from "react-native";
import {styles} from "./styles"

type Props = {
    onPress: () => void
}

export const FormButton = ({onPress}: Props) => {
    return(
        <Pressable style={styles.FormButton} onPress={onPress}>
            <Text style={styles.text}>Send</Text>
        </Pressable>
    )
}