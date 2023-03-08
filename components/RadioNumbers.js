import {Image, Pressable, Text, View} from "react-native";
import {styles} from "../constants/styles";
import {useState} from "react";

function RadioNumbers({numbers}) {
    const [chosen, setChosen] = useState(null);
    return (
        <View style={styles.radioNumbersContainer}>
            {
                numbers.map((num) => {
                    return (
                        <Pressable onPress={() => {
                            setChosen(num);

                        }}>
                            <View style={[styles.radioNumberBox, chosen===num && styles.radioNumberBox_chosen]}>
                                <Text style={styles.radioNumber}>
                                    {num}
                                </Text>
                            </View>
                        </Pressable>

                    )
                })
            }
        </View>
    );
}

export default RadioNumbers;
