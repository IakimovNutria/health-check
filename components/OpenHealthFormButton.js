import {useNavigation} from "@react-navigation/native";
import {styles} from "../styles/styles";
import Button from "./Button";

function OpenHealthFormButton({name, navigate_key}) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate(navigate_key);
    }

    return (
        <Button onPress={expensePressHandler}
                textStyle={styles.mainButton__text}
                containerStyle={styles.mainButton}
                pressedContainerStyle={styles.mainButton_pressed}
                title={name} />
    );
}

export default OpenHealthFormButton;
