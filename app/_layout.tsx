import { StyleSheet } from "react-native";
import { Index } from "./index";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";


export default function RootLayout() { 
  return (
    <SafeAreaView style={styles.safeArea}>
      <Index />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    margin: 20,
  },
});