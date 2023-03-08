import {ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from '../../constants/styles';
import RadioButtonRN from 'radio-buttons-react-native';
import RadioNumbers from '../../components/RadioNumbers';
import HealthForm from './HealthForm';
import {useState} from 'react';

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
    return (
        <HealthForm>
            <Text style={styles.info}>
                {
                    'К основным приёмам пищи относятся завтрак, обед и ужин. Среди дополнительных приёмов пищи – перекусы.\n\nОптимальным является 5-кратный прием пищи с интервалами в 3,5-4 ч. Суточная калорийность рациона должна распределяться: завтрак – 25% калорий, второй завтрак – 10%, обед – 35-40%, полдник – 10%, ужин – 20-25%.'
                }
            </Text>
            <Text style={styles.header}>Количество основных приемов пищи</Text>
            <RadioNumbers numbers={[1, 2, 3, 4, 5]}/>
            <Text style={styles.header}>Количество перекусов</Text>
            <RadioNumbers numbers={[1, 2, 3, 4, '5+']}/>
            <Text style={styles.header}>Оценка аппетита</Text>
            <RadioButtonRN
                data={radioData}
                selectedBtn={(e) => console.log(e)}
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
                       onChangeText={(text) => setWater(text.replace(/[^0-9]/g, ''))}
            />
        </HealthForm>
    )
}
