import {Text, View} from "react-native";
import {styles} from "../../styles/styles";
import RadioButtonRN from 'radio-buttons-react-native';
import { CheckBox } from '@rneui/themed';
import {useState, useEffect} from "react";
import RadioSmiles from "../../components/RadioSmiles";
import HealthForm from "./HealthForm";
import {getItem, setItem} from "../../storage/storage";
import {getDateKey} from "../../tools/func";
import {DreamCharacteristic, StorageKeys} from "../../constants/enums";
import SaveButton from "../../components/SaveButton";

const radioData = [
    {
        label: 'не спал'
    },
    {
        label: '2-4 часа'
    },
    {
        label: '5-6 часов'
    },
    {
        label: '7-8 часов'
    },
    {
        label: 'более 8 часов'
    },
];

export default function Dream() {
    const [sleepCharacteristic, setSleepCharacteristic] = useState({
        [DreamCharacteristic.QUICKLY]: false,
        [DreamCharacteristic.WOKE_UP]: false,
        [DreamCharacteristic.RESTFULL]: false,
        [DreamCharacteristic.LIGHT_SLEEP]: false,
        [DreamCharacteristic.NIGHTMARES]: false,
        [DreamCharacteristic.EASY_AWAKING]: false,
        [DreamCharacteristic.HEAVY_AWAKING]: false
    });
    const [sleepDuration, setSleepDuration] = useState('');
    const [sleepDurationRadioIndex, setSleepDurationRadioIndex] = useState(-1);
    const [sleepQuality, setSleepQuality] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        getItem(getDateKey(StorageKeys.SLEEP_DURATION, currentDate))
            .then((a) => setSleepDuration(a));
        getItem(getDateKey(StorageKeys.SLEEP_QUALITY, currentDate))
            .then((w) => setSleepQuality(w));
        getItem(getDateKey(StorageKeys.SLEEP_CHARACTERISTIC, currentDate))
            .then((m) => {
                const ar = JSON.parse(m);
                if (!Array.isArray(ar)) {
                    return;
                }
                ar.forEach((el) => {
                    setSleepCharacteristic((prev) => {return {...prev, [el]: true}});
                })
            });
    }, []);

    useEffect(() => {
        const chosenIndex = radioData.findIndex((e) => e.label === sleepDuration);
        setSleepDurationRadioIndex(chosenIndex !== -1 ? chosenIndex + 1 : -1);
    }, [sleepDuration]);

    const save = () => {
        const currentDate = new Date();
        setItem(getDateKey(StorageKeys.SLEEP_DURATION, currentDate), sleepDuration);
        setItem(getDateKey(StorageKeys.SLEEP_QUALITY, currentDate), sleepQuality);
        const chosenCharacteristics = [];
        for (let key in sleepCharacteristic) {
            if (sleepCharacteristic[key]) {
                chosenCharacteristics.push(key);
            }
        }
        setItem(getDateKey(StorageKeys.SLEEP_CHARACTERISTIC, currentDate), JSON.stringify(chosenCharacteristics));
    };

    return (
        <HealthForm>
            <Text style={styles.header}>Продолжительность сна</Text>
            <RadioButtonRN
                initial={sleepDurationRadioIndex}
                data={radioData}
                selectedBtn={(e) => {if (e !== undefined) {setSleepDuration(e.label)}}}
                boxStyle={{width: "100%", height: 50, borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: "75%"}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor="#fff"
                boxDeactiveBgColor="#fff"
            />
            <Text style={styles.header}>Характеристика сна</Text>
            <View style={{marginBottom: 10, width: "75%"}}>
            {
                Object.values(DreamCharacteristic).map((item) => {
                    const title = item;
                    return (<CheckBox
                                checked={sleepCharacteristic[title]}
                                onPress={() => setSleepCharacteristic((prev) => {return {...prev, [title]: !prev[title]}})}
                                title={title}
                                iconType="material-community"
                                checkedIcon="checkbox-outline"
                                uncheckedIcon={'checkbox-blank-outline'}
                                containerStyle={{width: "100%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                                titleProps={{fontWeight: 'normal'}}
                                key={item}
                            />)
                })
            }
            </View>
            <Text style={styles.header}>Оценка качества сна</Text>
            <RadioSmiles chosen={sleepQuality} onChoose={(e) => setSleepQuality(e)}/>
            <SaveButton onPress={save}/>
        </HealthForm>
    )
}
