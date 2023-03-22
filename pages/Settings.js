import {Button, Text} from "react-native";
import {useAppDispatch} from "../hooks";
import {setAuthStatus} from "../store/actions";
import {getItem} from "../storage/storage";
import {storageKeys} from "../constants/enums";
import {useState} from "react";

function Settings() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [sex, setSex] = useState("");
    getItem(storageKeys.NAME).then(n => setName(n));
    getItem(storageKeys.SURNAME).then(s => setSurname(s));
    getItem(storageKeys.BIRTHDATE).then(b => setBirthdate(b));
    getItem(storageKeys.SEX).then(s => setSex(s));

    return (
        <>
            <Text>{name}</Text>
            <Text>{surname}</Text>
            <Text>{birthdate}</Text>
            <Text>{sex}</Text>
            <Button onPress={() => dispatch(setAuthStatus(false))} title="сброс"/>
        </>
    );
}

export default Settings;
