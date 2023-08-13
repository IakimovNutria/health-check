import BgImageScreen from "../components/BgImageScreen";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import RadioItems from "../components/RadioItems";
import { Sex, StorageKeys } from "../constants/enums";
import { getItem, setItem } from "../storage/storage";
import { useAppDispatch } from "../hooks";
import { setAuthStatus } from "../store/actions";
import {getDate} from "../tools/func";

function Registration() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [sex, setSex] = useState("");

  const save = () => {
    if (name !== "" && surname !== "" && sex !== "") {
      setItem(StorageKeys.NAME, name);
      setItem(StorageKeys.SURNAME, surname);
      setItem(StorageKeys.SEX, sex);
      setItem(StorageKeys.BIRTHDATE, birthdate.toString());
      getItem(StorageKeys.DATE_START).then((d) => {
        if (d === null) {
          setItem(StorageKeys.DATE_START, getDate(new Date()).toString());
        }
      });
      dispatch(setAuthStatus(true));
    }
  };

  return (
    <BgImageScreen>
      <View style={styles.registration}>
        <Text>Имя</Text>
        <TextInput
          style={styles.shortHealthFormTextInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Text>Фамилия</Text>
        <TextInput
          style={styles.shortHealthFormTextInput}
          onChangeText={(text) => setSurname(text)}
          value={surname}
        />
        <Text>Дата рождения</Text>
        <RNDateTimePicker
          value={birthdate}
          onChange={(e, d) => setBirthdate(d)}
        />
        <Text>Пол</Text>
        <RadioItems
          items={["М", "Ж"]}
          onChoose={(s) => setSex(s)}
          keys={[Sex.MALE, Sex.FEMALE]}
          containerStyle={{ width: "30%" }}
          chosen={sex}
        />
        <Button title="Зарегистрироваться" onPress={() => save()} />
      </View>
    </BgImageScreen>
  );
}

export default Registration;
