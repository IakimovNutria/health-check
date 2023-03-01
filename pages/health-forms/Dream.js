import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {styles} from "../../constants/styles";
import RadioButtonRN from 'radio-buttons-react-native';
import { CheckBox } from '@rneui/themed';
import {DreamTranslation} from "./forms-utils";
import {useState} from "react";
import RadioSmiles from "../../components/RadioSmiles";

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
    const [checked, setChecked] = useState({
        quickly: false,
        woke_up: false,
        restfull: false,
        light_sleep: false,
        nightmares: false,
        easy_awaking: false,
        heavy_awaking: false
    });
    return (
        <ScrollView>
            <View style={styles.healthForm}>
                <Text style={styles.header}>Продолжительность сна</Text>
                <RadioButtonRN
                    data={radioData}
                    selectedBtn={(e) => console.log(e)}
                    boxStyle={{width: "100%", height: 50, borderRadius: 5, borderWidth: 0}}
                    style={{marginBottom: 20, width: "75%"}}
                    textStyle={{fontWeight: 'bold'}}
                    boxActiveBgColor="#fff"
                    boxDeactiveBgColor="#fff"
                />
                <Text style={styles.header}>Характеристика сна</Text>
                <View style={{marginBottom: 10, width: "75%"}}>
                {
                    Object.entries(DreamTranslation).map((item) => {
                        const name = item[0];
                        const title = item[1];
                        return (<CheckBox
                                    checked={checked[name]}
                                    onPress={() => setChecked((prev) => {return {...prev, [name]: !prev[name]}})}
                                    title={title}
                                    iconType="material-community"
                                    checkedIcon="checkbox-outline"
                                    uncheckedIcon={'checkbox-blank-outline'}
                                    containerStyle={{width: "100%", alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5}}
                                    titleProps={{fontWeight: 'normal'}}
                                />)
                    })
                }
                </View>
                <Text style={styles.header}>Оценка качества сна</Text>
                <RadioSmiles />
            </View>
        </ScrollView>
    )
}
