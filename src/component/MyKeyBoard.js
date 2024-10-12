import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import MyButton from './MyButton';
import { Styles } from '../styles/GlobalStyles';
import { myColors } from '../styles/Color';
import { ThemeContext } from '../context/ThemeContext';

const MyKeyBoard = () => {
    const theme = useContext(ThemeContext);

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(null);

    const handleNumberPress = (buttonValue) => {
        if (first.length < 10) {
            setFirst(first + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue) => {
        setOperation(buttonValue);
        setSecond(first);
        setFirst('');
    };

    const clearScreen = () => {
        setFirst('');
        setSecond('');
        setOperation('');
        setResult(null);
    };
    const clearLastDigit = () => {
        if (first.length > 0) {
            setFirst(first.slice(0, -1));
        }
    };

    const getResult = () => {
        switch (operation) {
            case "+":
                clearScreen();
                setResult(parseInt(second) + parseInt(first));
                break;
            case "-":
                clearScreen();
                setResult(parseInt(second) - parseInt(first));
                break;
            case "*":
                clearScreen();
                setResult(parseInt(second) * parseInt(first));
                break;
            case "/":
                clearScreen();
                setResult(parseInt(second) / parseInt(first));
                break;
            default:
                clearScreen();
                setResult(0);
                break;
        }
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return (
                <Text
                    style={
                        result < 99999
                            ? Styles.screenFirstNumber
                            : Styles.screenFirstNumber
                    }
                >
                    {result}
                </Text>
            );
        }

        if (first && first.length < 6) {
            return <Text style={theme === 'dark'? Styles.firstNumber: Styles.screenFirstNumber}>{first}</Text>;
        }

        if (first === "") {
            return <Text style={theme === 'dark'? Styles.firstNumber: Styles.screenFirstNumber}>{"0"}</Text>;
        }

        if (first.length > 5 && first.length < 8) {
            return (
                <Text style={[theme === 'dark'? Styles.firstNumber: Styles.screenFirstNumber, { fontSize: 70 }]}>
                    {first}
                </Text>
            );
        }

        if (first.length > 7) {
            return (
                <Text style={[theme === 'dark'? Styles.firstNumber: Styles.screenFirstNumber, { fontSize: 50 }]}>
                    {first}
                </Text>
            );
        }

        return null;
    };

    return (
        <View style={Styles.viewBottom}>
            <View style={{
                height: 120,
                width: "90%",
                justifyContent: "flex-end",
                alignSelf: "center",
            }}>
                <Text style={theme === 'dark'? Styles.secondNumber:Styles.screenSecondNumber}>
                    {second}
                    <Text style={{ color:theme ==='dark'? myColors.darkBlue: myColors.lightBlue, fontSize: 40, fontFamily:'Poppins-Medium'}}>
                        {operation}
                    </Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            
            <View style={Styles.row}>
                <MyButton title="C" onPress={clearScreen} />
                <MyButton title="+/-" onPress={() => handleOperationPress("+/-")}  />
                <MyButton title="%" onPress={() => handleOperationPress("%")}  />
                <MyButton title="/" onPress={() => handleOperationPress("/")}  />
            </View>

            <View style={Styles.row}>
                <MyButton title="7" onPress={() => handleNumberPress("7")}  />
                <MyButton title="8" onPress={() => handleNumberPress("8")}  />
                <MyButton title="9" onPress={() => handleNumberPress("9")}/>
                <MyButton title="*" onPress={() => handleOperationPress("*")} />
            </View>

            <View style={Styles.row}>
                <MyButton title="4" onPress={() => handleNumberPress("4")} />
                <MyButton title="5" onPress={() => handleNumberPress("5")} />
                <MyButton title="6" onPress={() => handleNumberPress("6")}  />
                <MyButton title="-" onPress={() => handleOperationPress("-")} />
            </View>

            <View style={Styles.row}>
                <MyButton title="1" onPress={() => handleNumberPress("1")}  />
                <MyButton title="2" onPress={() => handleNumberPress("2")}  />
                <MyButton title="3" onPress={() => handleNumberPress("3")}  />
                <MyButton title="+" onPress={() => handleOperationPress("+")} />
            </View>

            <View style={Styles.row}>
                <MyButton title="0" onPress={() => handleNumberPress("0")}  />
                <MyButton title="." onPress={() => setFirst(first.slice(0, 1) + ".")}  />
                <MyButton title="=" onPress={getResult}  />
                <MyButton title=" ⌫ " onPress={clearLastDigit} />
            </View>
        </View>
    );
};

export default MyKeyBoard;

const styles = StyleSheet.create({});
