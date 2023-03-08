import {StyleSheet} from "react-native";

export const Colors = {
    colors: {
        primary50: '#e4d9fd',
        primary100: '#c6affc',
        primary200: '#a281f0',
        primary400: '#5721d4',
        primary500: '#3e04c3',
        primary700: '#2d0689',
        primary800: '#200364',
        accent500: '#f7bc0c',
        error50: '#fcc4e4',
        error500: '#9b095c',
        gray500: '#39324a',
        gray700: '#221c30',
    }
};

export const styles = StyleSheet.create({
    header: {
        color: '#3e04c3',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign: "center"
    },
    radioSmile: {
        width: 60,
        height: 60,
        opacity: 0.2
    },
    radioSmile_chosen: {
        opacity: 1
    },
    radioNumberBox: {
        width: 50,
        height: 50,
        opacity: 0.2,
        borderRadius: 10,
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioNumbersContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '80%'
    },
    radioNumberBox_chosen: {
        opacity: 1
    },
    radioNumber: {
        color: '#FFFFFF'
    },
    mainButton: {
        width: "80%",
        alignSelf: 'center',
        padding: 12,
        marginVertical: 2,
        backgroundColor: '#3e04c3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 3,
        shadowColor: '#39324a',
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    mainButton_pressed: {
        opacity: 0.75
    },
    mainButton__text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e4d9fd'
    },
    healthForm: {
        marginTop: 20,
        marginBottom: 40,
        display: "flex",
        alignItems: "center",
        width: "100%"
    },
    shortHealthFormTextInput: {
        borderStyle: "solid",
        borderWidth: 3,
        width: "75%",
        borderRadius: 5,
        textAlign: "center",
        fontSize: 50,
        fontWeight: 'bold',
        borderColor: '#3e04c3',
        color: '#3e04c3',
    },
    longHealthFormTextInput: {
        borderStyle: "solid",
        borderWidth: 3,
        width: "75%",
        borderRadius: 5,
        fontSize: 16,
        borderColor: '#000000',
        color: '#000000',
    },
    info: {
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    }
});
