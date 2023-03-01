import {Text, TextInput, View} from "react-native";
import {styles} from "../../constants/styles";
import {useState} from "react";

export default function Menstrual() {
    const [day, setDay] = useState("");
    return (
        <View style={styles.healthForm}>
            <Text style={styles.header}>День менструального цикла</Text>
            <TextInput editable
                           maxLength={3}
                           value={day}
                           onChangeText={(text) => setDay(text.replace(/[^0-9]/g, ''))}
                           style={styles.shortHealthFormTextInput}
                           keyboardType={"numbers-and-punctuation"}
            />
        </View>)
}
