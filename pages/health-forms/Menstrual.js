import {Text, TextInput, View} from "react-native";
import {styles} from "../../styles/styles";
import {useState, useEffect} from "react";
import HealthForm from "./HealthForm";
import {getItem, setItem} from "../../storage/storage";
import {getDateKey} from "../../tools/func";
import {StorageKeys} from "../../constants/enums";
import SaveButton from "../../components/SaveButton";

export default function Menstrual() {
    const [day, setDay] = useState("");

    useEffect(() => {
        getItem(getDateKey(StorageKeys.MENSTRUAL, new Date()))
            .then(d => setDay(d));
    }, []);

    const save = () => {
        setItem(getDateKey(StorageKeys.MENSTRUAL, new Date()), day);
    };

    return (
        <HealthForm>
            <Text style={styles.header}>День менструального цикла</Text>
            <TextInput editable
                       maxLength={3}
                       value={day}
                       onChangeText={(text) => setDay(text.replace(/[^0-9]/g, ''))}
                       style={styles.shortHealthFormTextInput}
                       keyboardType={"numbers-and-punctuation"}
                       inputMode='numeric'
            />
            <SaveButton onPress={save} />
        </HealthForm>)
}
