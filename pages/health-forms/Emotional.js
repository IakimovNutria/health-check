import {Text, TextInput, View} from "react-native";
import {styles} from "../../styles/styles";
import RadioButtonRN from "radio-buttons-react-native";
import {useEffect, useState} from "react";
import RadioSmiles from "../../components/RadioSmiles";
import HealthForm from "./HealthForm";
import SaveButton from "../../components/SaveButton";
import {getItem, setItem} from "../../storage/storage";
import {getDateKey} from "../../tools/func";
import {StorageKeys} from "../../constants/enums";

export default function Emotional() {
    const [wish, setWish] = useState(null);
    const [characteristic, setCharacteristic] = useState("");
    const [noWishReason, setNoWishReason] = useState("");
    const [emotionalState, setEmotionalState] = useState("");
    const [radioIndex, setRadioIndex] = useState(-1);

    useEffect(() => {
        const currentDate = new Date();
        getItem(getDateKey(StorageKeys.TRAIN_WISH, currentDate)).then(e => {
            if (e !== 'Да' && e !== 'Нет') {
                return;
            }
            setWish(e === 'Да');
        });
        getItem(getDateKey(StorageKeys.TRAIN_NOT_WISH_REASON, currentDate)).then(e => setNoWishReason(e));
        getItem(getDateKey(StorageKeys.EMOTIONAL_STATE, currentDate)).then(e => setEmotionalState(e));
        getItem(getDateKey(StorageKeys.EMOTIONAL_CHARACTERISTIC, currentDate)).then(e => setCharacteristic(e));
    }, []);

    useEffect(() => {
        if (wish === null) {
            setRadioIndex(-1);
            return;
        }
        setRadioIndex(wish ? 1 : 2);
    }, [wish]);

    const save = () => {
        const currentDate = new Date();
        if (wish !== null) {
            setItem(getDateKey(StorageKeys.TRAIN_WISH, currentDate), wish ? 'Да' : 'Нет');
            if (!wish) {
                setItem(getDateKey(StorageKeys.TRAIN_NOT_WISH_REASON, currentDate), noWishReason);
            }
        }
        setItem(getDateKey(StorageKeys.EMOTIONAL_STATE, currentDate), emotionalState);
        setItem(getDateKey(StorageKeys.EMOTIONAL_CHARACTERISTIC, currentDate), characteristic);
    };

    return (
        <HealthForm>
            <Text style={styles.header}>Желание идти на тренировку</Text>
            <RadioButtonRN
                initial={radioIndex}
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
            <RadioSmiles chosen={emotionalState} onChoose={(e) => setEmotionalState(e)}/>
            <Text style={styles.header}>Краткая характеристика эмоционального состояния</Text>
            <TextInput editable
                       multiline
                       onChangeText={(text) => setCharacteristic(text)}
                       value={characteristic}
                       style={styles.longHealthFormTextInput} />
            <SaveButton onPress={save}/>
        </HealthForm>
    )
}
