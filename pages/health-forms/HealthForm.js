import {styles} from "../../constants/styles";
import {ScrollView, View} from "react-native";

export default function HealthForm({children}) {
    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.healthForm}>
                {children}
            </View>
        </ScrollView>
    )
}
