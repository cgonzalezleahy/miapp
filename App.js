import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Comidas' style={styles.input}/>
          <Button
            title="QUÉ COMEMOS HOY?"
            onPress={() => console.log ("Qué comemos hoy?")}
            style={{
              backgroundColor: "pink",
            }}
          />

      </View>
      <View></View>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
  },

  input:{
    borderBottomColor: "black", 
    borderBottomWidth: 2,
    width: 200,
    backgroundColor: "red",
  },
});

/*import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const App = () => {
  return (
    <View style={dtyles.container}>
      <View style={{ flex: 1, backgroundColor: "red"}}></View>
      <View style={{ backgroundColor: "yeloow", width: 100, height: 200}}>
        <Button title="Presione Aqui" />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  }
});*/

