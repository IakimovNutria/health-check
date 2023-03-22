import {styles} from "../../styles/styles";
import {ScrollView, View} from "react-native";
import BgImageScreen from "../../components/BgImageScreen";

export default function HealthForm({children}) {
    return (
        <BgImageScreen>
            <ScrollView automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.healthForm}>
                    {children}
                </View>
            </ScrollView>
        </BgImageScreen>
    )
}
