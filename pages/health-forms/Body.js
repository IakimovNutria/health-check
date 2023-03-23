import {Text, TextInput} from "react-native";
import RadioSmiles from "../../components/RadioSmiles";
import {styles} from "../../styles/styles";
import {useEffect, useState} from "react";
import HealthForm from "./HealthForm";
import SaveButton from "../../components/SaveButton";
import {getItem, setItem} from "../../storage/storage";
import {getDateKey} from "../../tools/func";
import {StorageKeys} from "../../constants/enums";

export default function Body() {
    const [pain, setPain] = useState("");
    const [fatigueLevel, setFatigueLevel] = useState("");

    useEffect(() => {
        const currentDate = new Date();
        getItem(getDateKey(StorageKeys.PAIN, currentDate)).then((p) => setPain(p));
        getItem(getDateKey(StorageKeys.FATIGUE_LEVEL, currentDate)).then((f) => setFatigueLevel(f));
    }, []);

    const save = () => {
        const currentDate = new Date();
        setItem(getDateKey(StorageKeys.PAIN, currentDate), pain);
        setItem(getDateKey(StorageKeys.FATIGUE_LEVEL, currentDate), fatigueLevel);
    };

    return (
        <HealthForm>
            <Text style={styles.header}>Уровень общей усталости</Text>
            <RadioSmiles onChoose={setFatigueLevel} chosen={fatigueLevel}/>
            <Text style={styles.header}>Болевые ощущения</Text>
            <TextInput editable
                       multiline
                       onChangeText={(text) => setPain(text)}
                       value={pain}
                       style={styles.longHealthFormTextInput}
            />
            <SaveButton onPress={save}/>
        </HealthForm>
    )
}
