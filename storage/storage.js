import {FormsHeaders} from "../pages/health-forms/forms-utils";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const HealthInputs = FormsHeaders

export const setItem = (name, value) => {
    AsyncStorage.setItem(name, value);
}

export const getItem = async (name) => {
    return await AsyncStorage.getItem(name);
}
