import {useNavigation} from "@react-navigation/native";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../constants/styles";

function HealthInputButton({name, navigate_key}) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate(navigate_key);
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed ? styles.pressed : styles.button}
        >
            <View style={styles.expenseItem}>
                <Text style={[styles.textBase, styles.description]}>
                    {name}
                </Text>
            </View>
        </Pressable>
    );
}

export default HealthInputButton;


const styles = StyleSheet.create({
    button: {
        width: "80%",
        alignSelf: 'center'
    },
    pressed: {
        opacity: 0.75,
        width: "90%",
        alignSelf: 'center'
    },
    expenseItem: {
        padding: 12,
        marginVertical: 2,
        backgroundColor: GlobalStyles.colors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
});
