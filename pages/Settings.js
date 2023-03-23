import {Button, Text} from "react-native";
import {useAppDispatch} from "../hooks";
import {setAuthStatus} from "../store/actions";
import {getItem} from "../storage/storage";
import {StorageKeys} from "../constants/enums";
import {useState} from "react";
import BgImageScreen from "../components/BgImageScreen";

function Settings() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [sex, setSex] = useState("");
    getItem(StorageKeys.NAME).then(n => setName(n));
    getItem(StorageKeys.SURNAME).then(s => setSurname(s));
    getItem(StorageKeys.BIRTHDATE).then(b => setBirthdate(b));
    getItem(StorageKeys.SEX).then(s => setSex(s));

    return (
        <BgImageScreen>
            <Text>{name}</Text>
            <Text>{surname}</Text>
            <Text>{birthdate}</Text>
            <Text>{sex}</Text>
            <Button onPress={() => dispatch(setAuthStatus(false))} title="сброс"/>
        </BgImageScreen>
    );
}

export default Settings;
