import { FlatList } from 'react-native';
import {HealthInputs} from "../storage/storage";
import OpenHealthFormButton from "../components/OpenHealthFormButton";
import BgImageScreen from "../components/BgImageScreen";

function renderInputButton(item) {
    return <OpenHealthFormButton name={item.item.value} navigate_key={item.item.key}/>;
}

function Main() {
    return (
        <BgImageScreen>
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={Object.entries(HealthInputs).map((item) => {return {key: item[0], value: item[1]}})}
                renderItem={renderInputButton}
                keyExtractor={(item) => item.key}
            />
        </BgImageScreen>
    );
}

export default Main;
