import {Text, TextInput, View} from "react-native";
import {useState} from "react";
import {styles} from "../../styles/styles";
import HealthForm from "./HealthForm";

export default function Heart() {
    const [heartRate, setHeartRate] = useState("");
    return (
        <HealthForm>
            <Text style={styles.header}>Утренняя ЧСС (УД/МИН)</Text>
            <TextInput editable
                       maxLength={3}
                       value={heartRate}
                       onChangeText={(text) => setHeartRate(text.replace(/[^0-9]/g, ''))}
                       style={styles.shortHealthFormTextInput}
                       keyboardType={"numbers-and-punctuation"}
            />
        </HealthForm>)
}
