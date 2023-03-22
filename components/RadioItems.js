import {Image, Pressable, Text, View} from "react-native";
import {styles} from "../styles/styles";
import {useState} from "react";
import {zip} from "../tools/func";

function RadioItems({items,
                        onChoose,
                        keys=null,
                        containerStyle=null,
                        boxItemStyle=null,
                        boxChosenItemStyle=null,
                        itemStyle=null}) {
    if (keys === null) {
        keys = items;
    }
    const [chosen, setChosen] = useState(null);
    return (
        <View style={[styles.radioItemsContainer, containerStyle]}>
            {
                zip(items, keys).map(([item, key]) => {
                    return (
                        <Pressable onPress={() => {
                            setChosen(item);
                            onChoose(key);
                        }}>
                            <View style={[styles.radioItemBox, chosen===item && styles.radioItemBox_chosen,
                                boxItemStyle, chosen===item && boxChosenItemStyle]}>
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
