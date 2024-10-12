import { StyleSheet, Text, View ,Switch} from 'react-native'
import React, { useState } from 'react'
import { myColors } from './src/styles/Color'
import { ThemeContext } from './src/context/ThemeContext'
import MyKeyBoard from './src/component/MyKeyBoard'

const App = () => {
  const [theme, setTheme]=useState('light')
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme === 'light'? styles.container : [styles.container,{backgroundColor:'black'}]}>
      <Switch
        value={theme === 'light'}
        onValueChange={()=>setTheme(theme === 'light'? 'dark': 'light')}
        />
        <MyKeyBoard/>
    </View>
    </ThemeContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{backgroundColor:myColors.white,flex:1},
  text:{color:myColors.black,fontSize:16}
})