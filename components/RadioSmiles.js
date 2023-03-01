import {Image, View} from "react-native";
import {styles} from "../constants/styles";

function RadioSmiles() {
    return (
        <View style={{display: "flex", flexDirection: "row"}}>
            <Image source={require("../img/awful.png")} style={styles.radioSmile}/>
            <Image source={require("../img/very-bad.png")} style={styles.radioSmile}/>
            <Image source={require("../img/bad.png")} style={styles.radioSmile}/>
            <Image source={require("../img/neutral.png")} style={styles.radioSmile}/>
            <Image source={require("../img/good.png")} style={styles.radioSmile}/>
            <Image source={require("../img/very-good.png")} style={styles.radioSmile}/>
        </View>
    );
}

export default RadioSmiles;
