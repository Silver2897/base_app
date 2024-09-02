import { Collapsible } from "@/components/Collapsible";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = (props:any) => {
  const defaultValues = {
    username:"",
    password:""
  }
  const [fieldValues,setFieldValues] = useState(defaultValues)


  const onChangeFunction = (field:string,value:string) =>{
    setFieldValues({...fieldValues,
      [field]:value
    })
  }

  const alertData = () =>{
    return `Phone Number: ${fieldValues["username"]} \n Email Address: ${fieldValues["password"]} \n ${fieldValues["username"]}${Math.random()}${fieldValues["password"] }`
  }

  const setItem = async (key:string, value:string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  };

  const onLogin = () => {
    if(fieldValues["username"].trim() == '' || fieldValues["password"].trim() == '' ){
      Alert.alert("Error","Please fill in all fields")
    }else {
    //   setItem("token",`${fieldValues["username"]}${Math.random()}${fieldValues["password"] }`)
    props.setToken(`${fieldValues["username"]}${Math.random()}${fieldValues["password"] }`)
      Alert.alert("Success",alertData())
    }
  }

  return (
    <View>
      <Text style={styles.text}>Login to {Platform.OS.toLocaleUpperCase()} Platform</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val)=>onChangeFunction("username",val)}
        value={fieldValues["username"]}
        placeholder="Enter User Name"
        keyboardType="email-address"
        autoCapitalize="sentences"
        autoCorrect={true}
        autoComplete="email"
      />
       <TextInput
        style={styles.input}
        onChangeText={(val)=>onChangeFunction("password",val)}
        value={fieldValues["password"]}
        placeholder="Enter Password"
        keyboardType="phone-pad"
        autoCapitalize="sentences"
        autoComplete="cc-number"
      />

    <Button title="Login" onPress={() => onLogin() }></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    margin: 20,
  },
  text: {
    fontSize: 15,
    alignContent: "center",
    textAlign:"center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
