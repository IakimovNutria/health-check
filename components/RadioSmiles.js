import {Image, Pressable, View} from "react-native";
import {styles} from "../styles/styles";
import {useState} from "react";

function RadioSmiles({onChoose, chosen}) {
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
                            onChoose(index.toString());
                        }} key={src.label}>
                            <Image source={src} key={src.label}
                                   style={[styles.radioSmile, chosen===index.toString() && styles.radioSmile_chosen]}
                            />
                        </Pressable>

                    )
                })
            }
        </View>
    );
}

export default RadioSmiles;
