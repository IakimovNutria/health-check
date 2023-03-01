import {ScrollView, Text, TextInput, View} from "react-native";
import RadioSmiles from "../../components/RadioSmiles";
import {styles} from "../../constants/styles";
import {useState} from "react";

export default function Body() {
    const [pain, setPain] = useState("");
    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.healthForm}>
                <Text style={styles.header}>Уровень общей усталости</Text>
                <RadioSmiles />
                <Text style={styles.header}>Болевые ощущения</Text>
                <TextInput editable
                           multiline
                           onChangeText={(text) => setPain(text)}
                           value={pain}
                           style={styles.longHealthFormTextInput}
                />
            </View>
        </ScrollView>)
}
