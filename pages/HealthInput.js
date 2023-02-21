import { FlatList } from 'react-native';
import {HealthInputs} from "../local_storage/storage";
import HealthInputButton from "../components/HealthInputButton";

function renderInputButton(item) {
    return <HealthInputButton name={item.item.value} navigate_key={item.item.key}/>;
}

function HealthInput() {
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

export default HealthInput;
