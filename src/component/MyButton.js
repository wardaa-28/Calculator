import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

export default function MyButton({ title, onPress  }) {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={
       theme === 'dark'
          ? Styles.btnBlue
          : Styles.btnGray
      }
      onPress={onPress}
    >
      <Text
        style={
          theme === 'dark'
         ? Styles.smallTextLight
         : Styles.smallTextDark  
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
