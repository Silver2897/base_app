
import {Alert, Button, Text, View } from "react-native";

export const AppPage = (props:any) => {

      const onLogout = () => {
        props.setToken('')
        Alert.alert("Logged Out","Success")
      }

    return (
      <View>
        
        <Text> 
            Logged in
        </Text>
        <Button title="Log Out" onPress={() => onLogout() }></Button>
      </View>
    );
  };