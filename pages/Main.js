import { FlatList } from 'react-native';
import {HealthInputs} from "../local_storage/storage";
import HealthFormButton from "../components/HealthFormButton";

function renderInputButton(item) {
    return <HealthFormButton name={item.item.value} navigate_key={item.item.key}/>;
}

function Main() {
    return (
        <FlatList
            scrollEnabled={false}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            data={Object.entries(HealthInputs).map((item) => {return {key: item[0], value: item[1]}})}
            renderItem={renderInputButton}
            keyExtractor={(item) => item.key}
        />
    );
}

export default Main;
