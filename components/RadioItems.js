import {Image, Pressable, Text, View} from "react-native";
import {styles} from "../styles/styles";
import {useState} from "react";
import {zip} from "../tools/func";

function RadioItems({items, onChoose, keys, containerStyle, boxItemStyle, boxChosenItemStyle, itemStyle, chosen}) {
    if (keys === undefined) {
        keys = items;
    }
    return (
        <View style={[styles.radioItemsContainer, containerStyle]}>
            {
                zip(items, keys).map(([item, key]) => {
                    return (
                        <Pressable onPress={() => onChoose(key)} key={item.toString()}>
                            <View style={[styles.radioItemBox, chosen===key && styles.radioItemBox_chosen,
                                boxItemStyle, chosen===key && boxChosenItemStyle]}>
                                <Text style={[styles.radioItem, itemStyle]}>
                                    {item}
                                </Text>
                            </View>
                        </Pressable>
                    )
                })
            }
        </View>
    );
}

export default RadioItems;
