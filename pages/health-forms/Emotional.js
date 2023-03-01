import {KeyboardAvoidingView, ScrollView, Text, TextInput, View} from "react-native";
import {styles} from "../../constants/styles";
import RadioButtonRN from "radio-buttons-react-native";
import {useState} from "react";
import RadioSmiles from "../../components/RadioSmiles";

export default function Emotional() {
    const [wish, setWish] = useState(null);
    const [characteristic, setCharacteristic] = useState("");
    const [noWishReason, setNoWishReason] = useState("");
    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.healthForm}>
                <Text style={styles.header}>Желание идти на тренировку</Text>
                <RadioButtonRN
                    data={[{label: "Да", value: true}, {label: "Нет", value: false}]}
                    selectedBtn={(e) => setWish(e.value)}
                    boxStyle={{width: "100%", height: 50, borderRadius: 5, borderWidth: 0}}
                    style={{marginBottom: 20, width: "75%"}}
                    textStyle={{fontWeight: 'bold'}}
                    boxActiveBgColor="#fff"
                    boxDeactiveBgColor="#fff"
                />
                {
                    (wish === false) && (
                        <View style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20}}>
                            <Text style={styles.header}>Причина</Text>
                            <TextInput editable
                                       multiline
                                       onChangeText={(text) => setNoWishReason(text)}
                                       value={noWishReason}
                                       style={styles.longHealthFormTextInput}
                            />
                        </View>)

                }
                <Text style={styles.header}>Оценка эмоционального состояния</Text>
                <RadioSmiles />
                <Text style={styles.header}>Краткая характеристика эмоционального состояния</Text>
                <TextInput editable
                           multiline
                           onChangeText={(text) => setCharacteristic(text)}
                           value={characteristic}
                           style={styles.longHealthFormTextInput} />
            </View>
        </ScrollView>
    )
}
