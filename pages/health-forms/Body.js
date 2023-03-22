import {ScrollView, Text, TextInput, View} from "react-native";
import RadioSmiles from "../../components/RadioSmiles";
import {styles} from "../../styles/styles";
import {useState} from "react";
import HealthForm from "./HealthForm";

export default function Body() {
    const [pain, setPain] = useState("");
    return (
        <HealthForm>
            <Text style={styles.header}>Уровень общей усталости</Text>
            <RadioSmiles />
            <Text style={styles.header}>Болевые ощущения</Text>
            <TextInput editable
                       multiline
                       onChangeText={(text) => setPain(text)}
                       value={pain}
                       style={styles.longHealthFormTextInput}
            />
        </HealthForm>
    )
}
