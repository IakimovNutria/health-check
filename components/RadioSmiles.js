import {Image, Pressable, View} from "react-native";
import {styles} from "../constants/styles";
import {useState} from "react";

function RadioSmiles() {
    const [chosen, setChosen] = useState(null);
    return (
        <View style={{display: "flex", flexDirection: "row"}}>
            {
                [
                    require("../img/awful.png"), require("../img/very-bad.png"),
                    require("../img/bad.png"), require("../img/neutral.png"),
                    require("../img/good.png"), require("../img/very-good.png")
                ].map((src, index) => {
                    return (
                        <Pressable onPress={() => {
                            setChosen(index);

                        }}>
                            <Image source={src}
                                   style={[styles.radioSmile, chosen===index && styles.radioSmile_chosen]}
                            />
                        </Pressable>

                    )
                })
            }
        </View>
    );
}

export default RadioSmiles;
