import {Button, Text, TextInput} from 'react-native';
import {styles} from '../../styles/styles';
import RadioButtonRN from 'radio-buttons-react-native';
import RadioItems from '../../components/RadioItems';
import HealthForm from './HealthForm';
import {useEffect, useState} from 'react';
import {getItem, setItem} from "../../storage/storage";
import {getDateKey} from "../../tools/func";
import {StorageKeys} from "../../constants/enums";
import SaveButton from "../../components/SaveButton";


const radioData = [
    {
        label: 'очень сильное чувство голода, слабость, головокружение'
    },
    {
        label: 'сильный голод, раздражительность, упадок сил'
    },
    {
        label: 'легкое чувство голода, урчание в животе'
    },
    {
        label: 'слабое ощущение голода'
    },
    {
        label: 'отсутствие голода и наполненности'
    },
    {
        label: 'приятное чувство сытости'
    },
    {
        label: 'незначительный дискомфорт'
    },
    {
        label: 'значительный дискомфорт, чувство наполненности, тяжесть'
    },
    {
        label: 'сильный дискомфорт, боли в желудке'
    },
    {
        label: 'ощущение тошноты, крайняя степень дискомфорта'
    },
];

export default function Appetite() {
    const [water, setWater] = useState('');
    const [mainMealCount, setMainMealCount] = useState('');
    const [snackCount, setSnackCount] = useState('');
    const [appetite, setAppetite] = useState('');
    const [appetiteRadioIndex, setAppetiteRadioIndex] = useState(-1);

    useEffect(() => {
        const currentDate = new Date();
        getItem(getDateKey(StorageKeys.APPETITE, currentDate))
            .then((a) => setAppetite(a));
        getItem(getDateKey(StorageKeys.WATER, currentDate))
            .then((w) => setWater(w));
        getItem(getDateKey(StorageKeys.MAIN_MEAL_COUNT, currentDate))
            .then((m) => setMainMealCount(m));
        getItem(getDateKey(StorageKeys.SNACK_COUNT, currentDate))
            .then((s) => setSnackCount(s));
    }, []);

    useEffect(() => {
        const chosenIndex = radioData.findIndex((e) => e.label === appetite);
        setAppetiteRadioIndex(chosenIndex !== -1 ? chosenIndex + 1 : -1);
    }, [appetite]);

    const save = () => {
        const currentDate = new Date();
        setItem(getDateKey(StorageKeys.WATER, currentDate), water);
        setItem(getDateKey(StorageKeys.MAIN_MEAL_COUNT, currentDate), mainMealCount);
        setItem(getDateKey(StorageKeys.SNACK_COUNT, currentDate), snackCount);
        setItem(getDateKey(StorageKeys.APPETITE, currentDate), appetite);
    };

    return (
        <HealthForm>
            <Text style={styles.info}>
                {
                    'К основным приёмам пищи относятся завтрак, обед и ужин. Среди дополнительных приёмов пищи – перекусы.\n\nОптимальным является 5-кратный прием пищи с интервалами в 3,5-4 ч. Суточная калорийность рациона должна распределяться: завтрак – 25% калорий, второй завтрак – 10%, обед – 35-40%, полдник – 10%, ужин – 20-25%.'
                }
            </Text>
            <Text style={styles.header}>Количество основных приемов пищи</Text>
            <RadioItems items={['1', '2', '3', '4', '5']} onChoose={setMainMealCount} chosen={mainMealCount}/>
            <Text style={styles.header}>Количество перекусов</Text>
            <RadioItems items={['1', '2', '3', '4', '5+']} onChoose={setSnackCount} chosen={snackCount}/>
            <Text style={styles.header}>Оценка аппетита</Text>
            <RadioButtonRN
                initial={appetiteRadioIndex}
                data={radioData}
                selectedBtn={(e) => {if (e !== undefined) {setAppetite(e.label)}}}
                boxStyle={{width: '100%', height: 'auto', borderRadius: 5, borderWidth: 0}}
                style={{marginBottom: 20, width: '75%'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor='#fff'
                boxDeactiveBgColor='#fff'
            />
            <Text style={styles.header}>Количество потребляемой жидкости (воды) в мл.</Text>
            <Text style={styles.info}>стакан - 250 мл.</Text>
            <TextInput editable
                       style={styles.shortHealthFormTextInput}
                       keyboardType={'numbers-and-punctuation'}
                       value={water}
                       inputMode='numeric'
                       onChangeText={(text) => setWater(text.replace(/[^0-9]/g, ''))}
            />
            <SaveButton onPress={save} />
        </HealthForm>
    )
}
