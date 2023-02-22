import {ScrollView, Text, View} from "react-native";
import {Header} from "../../constants/styles";
import RadioButtonRN from 'radio-buttons-react-native';
import { CheckBox } from '@rneui/themed';
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";

const data = [
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
    const [checked, setChecked] = useState(false);
    return (
        <ScrollView>
            <Text style={{...Header.header, marginTop: 10}}>Продолжительность сна</Text>
            <RadioButtonRN
                data={data}
                selectedBtn={(e) => console.log(e)}
                boxStyle={{width: "75%", height: 50, borderRadius: 5, borderWidth: 0}}
                style={{alignSelf: 'center'}}
                textStyle={{fontWeight: 'bold'}}
                boxActiveBgColor="#fff"
                boxDeactiveBgColor="#fff"
            />
            <Text style={{...Header.header, marginTop: 10}}>Характеристика сна</Text>
            <CheckBox
                checked={checked}
                onPress={() => setChecked((prev) => !prev)}
                title="уснул быстро"
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{width: "75%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                titleProps={{fontWeight: 'normal'}}
            />
            <CheckBox
                checked={checked}
                onPress={() => setChecked((prev) => !prev)}
                title="много просыпался за ночь"
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{width: "75%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                titleProps={{fontWeight: 'normal'}}
            />
            <CheckBox
                checked={checked}
                onPress={() => setChecked((prev) => !prev)}
                title="спокойный сон"
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{width: "75%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                titleProps={{fontWeight: 'normal'}}
            />
            <CheckBox
                checked={checked}
                onPress={() => setChecked((prev) => !prev)}
                title="чуткий сон"
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{width: "75%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                titleProps={{fontWeight: 'normal'}}
            />
            <CheckBox
                checked={checked}
                onPress={() => setChecked((prev) => !prev)}
                title="ночные кошмары"
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{width: "75%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                titleProps={{fontWeight: 'normal'}}
            />
            <CheckBox
                checked={checked}
                onPress={() => setChecked((prev) => !prev)}
                title="легкое пробуждение"
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{width: "75%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                titleProps={{fontWeight: 'normal'}}
            />
            <CheckBox
                checked={checked}
                onPress={() => setChecked((prev) => !prev)}
                title="тяжелое пробуждение"
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{width: "75%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                titleProps={{fontWeight: 'normal'}}
            />
        </ScrollView>
    )
}

