import React from "react";
import { View, StatusBar } from "react-native";
import { Login } from "@/components/Login";
import { AppPage } from "@/components/AppPage";

export const Index = () => {
  const [token, setToken] = React.useState<string>("");

  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      {!token ? <Login setToken={setToken} /> : <AppPage setToken={setToken} />}
    </View>
  );
};
