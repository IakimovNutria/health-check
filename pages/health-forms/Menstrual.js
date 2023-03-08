import {Text, TextInput, View} from "react-native";
import {styles} from "../../constants/styles";
import {useState} from "react";
import HealthForm from "./HealthForm";

export default function Menstrual() {
    const [day, setDay] = useState("");
    return (
        <HealthForm>
            <Text style={styles.header}>День менструального цикла</Text>
            <TextInput editable
                           maxLength={3}
                           value={day}
                           onChangeText={(text) => setDay(text.replace(/[^0-9]/g, ''))}
                           style={styles.shortHealthFormTextInput}
                           keyboardType={"numbers-and-punctuation"}
            />
        </HealthForm>)
}
