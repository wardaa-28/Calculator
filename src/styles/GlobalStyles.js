import { StyleSheet } from "react-native";
import { myColors } from "./Color";

export const Styles = StyleSheet.create({
   
    btnBlue: {
        backgroundColor: myColors.darkBlue,
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: '22%',
        borderRadius: 20
    },
    btnGray: {
        backgroundColor:myColors.lightBlue,
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: '22%',
        borderRadius: 20
    },
    btnLight: {
        backgroundColor: myColors.gray,
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: '22%',
        borderRadius: 20
    },
    btnDark: {
        backgroundColor: myColors.black,
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: '22%',
        borderRadius: 20
    },
    smallTextLight: {
        color: myColors.white,
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    smallTextDark: {
        color: '#109DFF',
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 20,
    },
    screenFirstNumber: {
        fontSize: 90,
        color: 'black',
        fontFamily:'Poppins-Medium',
        alignSelf: "flex-end",
    },
    firstNumber: {
        fontSize: 90,
        color: 'white',
        fontFamily:'Poppins-Medium',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: 'black',
        fontFamily:'Poppins-Medium',
        alignSelf: "flex-end",
    },
    secondNumber: {
        fontSize: 40,
        color: 'white',
        fontFamily:'Poppins-Medium',
        alignSelf: "flex-end",
    },
});
