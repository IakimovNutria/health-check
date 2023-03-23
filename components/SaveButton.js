import Button from "./Button";
import {styles} from "../styles/styles";

function SaveButton({onPress}) {
    return <Button onPress={onPress}
                   title='Сохранить'
                   containerStyle={styles.healthFormSaveButton}
                   pressedContainerStyle={styles.healthFormSaveButton_pressed}
                   textStyle={styles.healthFormSaveButton__text}/>
}

export default SaveButton;
