import BgImageScreen from "../components/BgImageScreen";
import {Button, Text, TextInput, View} from "react-native";
import {styles} from "../styles/styles";
import {useState} from "react";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import RadioItems from "../components/RadioItems";
import {Sex, storageKeys} from "../constants/enums";
import {getItem, setItem} from "../storage/storage";
import {useAppDispatch} from "../hooks";
import {setAuthStatus} from "../store/actions";

function Registration() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthdate, setBirthdate] = useState(new Date());
    const [sex, setSex] = useState("");

    const save = () => {
        if (name !== "" && surname !== "" && sex !== "") {
            setItem(storageKeys.NAME, name);
            setItem(storageKeys.SURNAME, surname);
            setItem(storageKeys.SEX, sex);
            setItem(storageKeys.BIRTHDATE, birthdate.toString());
            setItem(storageKeys.DATE_START, (new Date()).toString());
            dispatch(setAuthStatus(true));
        }
    };

    return (
        <BgImageScreen>
            <View style={styles.registration}>
                <Text>Имя</Text>
                <TextInput style={styles.shortHealthFormTextInput}
                           onChangeText={(text) => setName(text)}
                           value={name}
                />
                <Text>Фамилия</Text>
                <TextInput style={styles.shortHealthFormTextInput}
                           onChangeText={(text) => setSurname(text)}
                           value={surname}
                />
                <Text>Дата рождения</Text>
                <RNDateTimePicker value={birthdate} onChange={(e, d) => setBirthdate(d)}/>
                <Text>Пол</Text>
                <RadioItems items={['М', 'Ж']} onChoose={(s) => setSex(s)} keys={[Sex.MALE, Sex.FEMALE]} containerStyle={{width: '30%'}}/>
                <Button title="Зарегистрироваться" onPress={() => save()}/>
            </View>
        </BgImageScreen>
    );


}

export default Registration;
