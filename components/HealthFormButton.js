import {useNavigation} from "@react-navigation/native";
import {Pressable, Text} from "react-native";
import {styles} from "../styles/styles";

function HealthFormButton({name, navigate_key}) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate(navigate_key);
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => [styles.mainButton, pressed ? styles.mainButton_pressed : null]}
        >
            <Text style={[styles.mainButton__text]}>
                {name}
            </Text>
        </Pressable>
    );
}

export default HealthFormButton;
