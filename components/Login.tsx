import { Collapsible } from "@/components/Collapsible";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Login = (props: any) => {
  const defaultValues = {
    username: "",
    password: "",
  };
  const [fieldValues, setFieldValues] = useState(defaultValues);
  // const [showPassword, setShowPassword] = useState(false);

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const onChangeFunction = (field: string, value: string) => {
    setFieldValues({ ...fieldValues, [field]: value });
  };

  const alertData = () => {
    return `Phone Number: ${fieldValues["username"]} \n Email Address: ${
      fieldValues["password"]
    } \n ${fieldValues["username"]}${Math.random()}${fieldValues["password"]}`;
  };

  const setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  const onLogin = () => {
    if (fieldValues["username"].trim() == "") {
      Alert.alert("Error", "Please fill Username");
    } else if (fieldValues["password"].trim() == "") {
      Alert.alert("Error", "Please fill Password");
    } else if (fieldValues["password"].length < 8) {
      Alert.alert("Error", "Password length should be greater than 7");
    } else {
      //   setItem("token",`${fieldValues["username"]}${Math.random()}${fieldValues["password"] }`)
      props.setToken(
        `${fieldValues["username"]}${Math.random()}${fieldValues["password"]}`
      );
      Alert.alert("Success", alertData());
    }
  };

  return (
    <View style={styles.View}>
      <Image
        alt="App Logo"
        resizeMode="contain"
        style={styles.headerImg}
        source={{
          uri: "https://assets.withfra.me/SignIn.2.png",
        }}
      />
      <Text style={styles.text}>
        Login to {Platform.OS.toLocaleUpperCase()} Platform
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangeFunction("username", val)}
        value={fieldValues["username"]}
        placeholder="Enter User Name"
        keyboardType="email-address"
        autoCapitalize="sentences"
        autoCorrect={true}
        autoComplete="email"
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(val) => onChangeFunction("password", val)}
          secureTextEntry={true}
          value={fieldValues["password"]}
          placeholder="Enter Password"
          keyboardType="phone-pad"
          autoCapitalize="sentences"
          autoComplete="cc-number"
        />
        {/* <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={20}
          color="#aaa"
          onPress={toggleShowPassword}
        /> */}
      </View>
      <Text style={styles.formLink}>Forgot password?</Text>
      <Pressable style={styles.button} onPress={() => onLogin()}>
        <Text style={styles.buttontext}>Login</Text>
      </Pressable>
      <Text style={styles.signUpText}>
        Don't have an account?{" "}
        <Text style={{ textDecorationLine: "underline", color: "#005792" }}>
          SignUp
        </Text>
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  View: {
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    margin: 20,
  },
  logoutText: {
    fontSize: 20,
  },
  signUpText: {
    fontSize: 15,
    alignContent: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    alignContent: "center",
    textAlign: "center",
  },
  container: {
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formLink: {
    fontSize: 12,
    paddingBottom: 10,
    fontWeight: "600",
    color: "#075eec",
    textAlign: "center",
  },
  button: {
    elevation: 10,
    backgroundColor: "#005792",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 10,
    width: 100,
  },
  buttontext: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
