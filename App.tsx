import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Image, TextInput } from 'react-native';
import { SignalButton } from './src/Components/BatButton/SignalButton';
import { FormButton } from "./src/Components/BatButton/FormButton";
import { styles } from './styles';

export default function App() {
  const [ShowForm, SetShowForm] = useState(false)
  const [Name, SetName] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const [Location, SetLocation] = useState("");
  const [Description, SetDescription] = useState("");



  return (
    <View style={styles.container}>
     {!ShowForm ? (
        <>
        <View style={styles.imageContainer}>
        <Image
        source={require("./assets/Batlogo.png")}
        resizeMode='contain'
        style={styles.image}/>
        </View>
        <View style={styles.buttonContainer}>
        <SignalButton onPress={() => SetShowForm(true) }/>
        </View>
        </>
     ) : (
        <View style={styles.formContainer}>
            {/**/}
            <Text  style={styles.label}>Name:</Text>
            <TextInput onChangeText={SetName} style={styles.input} keyboardType="phone-pad" value={Name}/>
            
            {/**/}
            <Text  style={styles.label}>Phone Number:</Text>
            <TextInput onChangeText={SetPhoneNumber} style={styles.input} value={PhoneNumber}/>
            
            {/*Write the location*/}
            <Text  style={styles.label}>Location:</Text>
            <TextInput style={styles.input} onChangeText={SetLocation} value={Location}/>
            
            {/*Write description of the occurrence*/}
            <Text style={styles.label}>Description:</Text>
            <TextInput style={styles.input} onChangeText={SetDescription} multiline value={Description} />
          
            <FormButton onPress={() => console.log({ Name, PhoneNumber, Location, Description })} />
          </View>

     )}
      <StatusBar style="light" />
    </View>
  );
}


