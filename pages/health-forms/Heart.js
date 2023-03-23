import {Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {styles} from "../../styles/styles";
import HealthForm from "./HealthForm";
import SaveButton from "../../components/SaveButton";
import {getItem, setItem} from "../../storage/storage";
import {getDateKey} from "../../tools/func";
import {StorageKeys} from "../../constants/enums";

export default function Heart() {
    const [heartRate, setHeartRate] = useState("");

    useEffect(() => {
        getItem(getDateKey(StorageKeys.HEART_RATE, new Date()))
            .then(h => setHeartRate(h));
    }, []);

    const save = () => {
        setItem(getDateKey(StorageKeys.HEART_RATE, new Date()), heartRate);
    };

    return (
        <HealthForm>
            <Text style={styles.header}>Утренняя ЧСС (УД/МИН)</Text>
            <TextInput editable
                       maxLength={3}
                       value={heartRate}
                       onChangeText={(text) => setHeartRate(text.replace(/[^0-9]/g, ''))}
                       inputMode='numeric'
                       style={styles.shortHealthFormTextInput}
                       keyboardType={"numbers-and-punctuation"}
            />
            <SaveButton onPress={save}/>
        </HealthForm>)
}
