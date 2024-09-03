import { Alert, Button, Pressable, Text, View } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { styles } from "./Login";

export const AppPage = (props: any) => {
  const onLogout = () => {
    props.setToken("");
    Alert.alert("Logged Out", "Success");
  };

  return (
    <View style={styles.View}>
      <Text style={[styles.safeArea, styles.logoutText]}>Logged in</Text>
      <Pressable style={styles.button} onPress={() => onLogout()}>
        <Text style={styles.buttontext}>Log Out</Text>
      </Pressable>
    </View>
  );
};
