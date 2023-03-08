import {Text, TextInput} from "react-native";
import HealthForm from "./HealthForm";
import {styles} from "../../constants/styles";
import RadioButtonRN from "radio-buttons-react-native";
import {useState} from "react";

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
        label: 'сустовная боль',
        key: 'сустовная боль'
    },
    {
        label: 'мышечная боль',
        key: 'мышечная боль'
    },
    {
        label: 'другое',
        key: null
    }
];

export default function Training() {
    const [trauma, setTrauma] = useState('');
    const [customTrauma, setCustomTrauma] = useState('');
    return (
        <HealthForm>
            <Text style={styles.info}>{'К основным средствам каратэ относятся базовая техника, упражнения с партнером, спарринги, упражнения на снарядах.\nК вспомогательным средствам каратэ относятся упражнения на гибкость, беговые упражнения, развитие общей физической подготовки, тренажёры.'}</Text>
            <Text style={styles.header}>Тип тренировки</Text>
            <RadioButtonRN
                data={radioDataTrainingType}
                selectedBtn={(e) => console.log(e)}
                boxStyle={{width: '100%', height: 'auto', borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: '75%'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor='#fff'
                boxDeactiveBgColor='#fff'
            />
            <Text style={styles.header}>Субъективная оценка сложности тренировки</Text>
            <RadioButtonRN
                data={radioDataTrainingDifficult}
                selectedBtn={(e) => console.log(e)}
                boxStyle={{width: '100%', height: 'auto', borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: '75%'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor='#fff'
                boxDeactiveBgColor='#fff'
            />
            <Text style={styles.header}>Травмы</Text>
            <RadioButtonRN
                data={radioDataTrainingTrauma}
                selectedBtn={(e) => setTrauma(e.key)}
                boxStyle={{width: '100%', height: 'auto', borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: '75%'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor='#fff'
                boxDeactiveBgColor='#fff'
            />
            {
                trauma === null && <TextInput style={styles.longHealthFormTextInput} multiline/>
            }
        </HealthForm>
    )
}
