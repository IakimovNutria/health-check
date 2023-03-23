import {Text, TextInput} from "react-native";
import HealthForm from "./HealthForm";
import {styles} from "../../styles/styles";
import RadioButtonRN from "radio-buttons-react-native";
import {useEffect, useState} from "react";
import SaveButton from "../../components/SaveButton";
import {getDateKey} from "../../tools/func";
import {StorageKeys} from "../../constants/enums";
import {getItem, setItem} from "../../storage/storage";

const radioDataTrainingType = [
    {
        label: 'основные средства каратэ'
    },
    {
        label: 'вспомогательные средства каратэ'
    },
    {
        label: 'игровые упражнения'
    }
];

const radioDataTrainingDifficult = [
    {
        label: 'очень легкая тренировка'
    },
    {
        label: 'оптимальная тренировка'
    },
    {
        label: 'умеренная сложность тренировки'
    },
    {
        label: 'сложная тренировка'
    },
    {
        label: 'очень сложная тренировка'
    },
];

const radioDataTrainingTrauma = [
    {
        label: 'сустовная боль'
    },
    {
        label: 'мышечная боль'
    },
    {
        label: 'другое'
    }
];

export default function Training() {
    const [trauma, setTrauma] = useState('');
    const [trainType, setTrainType] = useState('');
    const [trainComplexity, setTrainComplexity] = useState('');
    const [customTrauma, setCustomTrauma] = useState('');
    const [traumaRadioIndex, setTraumaRadioIndex] = useState(-1);
    const [trainTypeRadioIndex, setTrainTypeRadioIndex] = useState(-1);
    const [trainComplexityRadioIndex, setTrainComplexityRadioIndex] = useState(-1);

    useEffect(() => {
        const currentDate = new Date();
        getItem(getDateKey(StorageKeys.TRAIN_TRAUMA, currentDate)).then(e => {
            if (e === null) {
                return;
            }
            if (radioDataTrainingTrauma.map(x => x.label).includes(e)) {
                setTrauma(e);
            } else {
                setTrauma('другое');
                setCustomTrauma(e);
            }
        });
        getItem(getDateKey(StorageKeys.TRAIN_TYPE, currentDate)).then(e => setTrainType(e));
        getItem(getDateKey(StorageKeys.TRAIN_COMPLEXITY, currentDate)).then(e => setTrainComplexity(e));
    }, []);

    useEffect(() => {
        const chosenIndex = radioDataTrainingTrauma.findIndex((e) => e.label === trauma);
        setTraumaRadioIndex(chosenIndex !== -1 ? chosenIndex + 1 : -1);
    }, [trauma]);

    useEffect(() => {
        const chosenIndex = radioDataTrainingType.findIndex((e) => e.label === trainType);
        setTrainTypeRadioIndex(chosenIndex !== -1 ? chosenIndex + 1 : -1);
    }, [trainType]);

    useEffect(() => {
        const chosenIndex = radioDataTrainingDifficult.findIndex((e) => e.label === trainComplexity);
        setTrainComplexityRadioIndex(chosenIndex !== -1 ? chosenIndex + 1 : -1);
    }, [trainComplexity]);

    const save = () => {
        const currentDate = new Date();
        setItem(getDateKey(StorageKeys.TRAIN_TRAUMA, currentDate), trauma !== 'другое' ? trauma : customTrauma);
        setItem(getDateKey(StorageKeys.TRAIN_TYPE, currentDate), trainType);
        setItem(getDateKey(StorageKeys.TRAIN_COMPLEXITY, currentDate), trainComplexity);
    };

    return (
        <HealthForm>
            <Text style={styles.info}>{'К основным средствам каратэ относятся базовая техника, упражнения с партнером, спарринги, упражнения на снарядах.\nК вспомогательным средствам каратэ относятся упражнения на гибкость, беговые упражнения, развитие общей физической подготовки, тренажёры.'}</Text>
            <Text style={styles.header}>Тип тренировки</Text>
            <RadioButtonRN
                initial={trainTypeRadioIndex}
                data={radioDataTrainingType}
                selectedBtn={(e) => {if (e !== undefined) {setTrainType(e.label)}}}
                boxStyle={{width: '100%', height: 'auto', borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: '75%'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor='#fff'
                boxDeactiveBgColor='#fff'
            />
            <Text style={styles.header}>Субъективная оценка сложности тренировки</Text>
            <RadioButtonRN
                initial={trainComplexityRadioIndex}
                data={radioDataTrainingDifficult}
                selectedBtn={(e) => {if (e !== undefined) {setTrainComplexity(e.label)}}}
                boxStyle={{width: '100%', height: 'auto', borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: '75%'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor='#fff'
                boxDeactiveBgColor='#fff'
            />
            <Text style={styles.header}>Травмы</Text>
            <RadioButtonRN
                initial={traumaRadioIndex}
                data={radioDataTrainingTrauma}
                selectedBtn={(e) => {if (e !== undefined) {setTrauma(e.label)}}}
                boxStyle={{width: '100%', height: 'auto', borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: '75%'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor='#fff'
                boxDeactiveBgColor='#fff'
            />
            {
                trauma === 'другое' && (
                    <TextInput editable
                               style={styles.longHealthFormTextInput}
                               multiline
                               onChangeText={(text) => setCustomTrauma(text)}
                               value={customTrauma}
                    />)
            }
            <SaveButton onPress={save} />
        </HealthForm>
    )
}
