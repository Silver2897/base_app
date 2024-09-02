import React from "react";
import {
  View
} from "react-native";
import { Login } from "@/components/Login";
import { AppPage } from "@/components/AppPage";

export const Index = () => {

  const [token, setToken] = React.useState<string>('');
  

  return (
    <View>
    { !token && <Login setToken={setToken}/> }
      
    {token &&  <AppPage setToken={setToken}/> }
    </View>
  );
};
