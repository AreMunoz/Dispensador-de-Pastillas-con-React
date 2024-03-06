import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

const customStyles = StyleSheet.create ({
    text:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: "black",
    }
});

type CustomText = TextProps;

function CustomText({style, ...props}: TextProps){
    return <Text {...props} style={[customStyles.text, style]}/>
}

export default CustomText;
export { customStyles };