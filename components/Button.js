import {Pressable, Text} from "react-native";


function Button({onPress, containerStyle, textStyle, pressedContainerStyle, title}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [containerStyle, pressed ? pressedContainerStyle : null]}
        >
            <Text style={[textStyle]}>
                {title}
            </Text>
        </Pressable>
    );
}

export default Button
